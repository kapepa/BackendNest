"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const users_entity_1 = require("./users.entity");
const roles_service_1 = require("../roles/roles.service");
const role_enum_1 = require("../auth/dto/role.enum");
let UsersService = class UsersService {
    constructor(usersRepository, roleServise) {
        this.usersRepository = usersRepository;
        this.roleServise = roleServise;
    }
    async createUser(dto) {
        try {
            const user = this.usersRepository.create(dto);
            const role = await this.roleServise.getRolesByValue(Object.values(role_enum_1.Role).includes(dto.role) ? dto.role : 'USER');
            if (!role)
                throw new common_1.HttpException('Such role not found', common_1.HttpStatus.FORBIDDEN);
            user.roles = [role];
            const save = await this.usersRepository.save(user);
            return save;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in create user', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async getAllUser() {
        try {
            const users = await this.usersRepository.find({
                relations: ['roles'],
            });
            return users;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in registration', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async updateUser(id, field, data) {
        try {
            const update = await this.usersRepository.update(id, { [field]: data });
            return null;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in update user', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async upgradeUser(profil) {
        const user = await this.usersRepository.save(profil);
        return user;
    }
    async getUserByEmail(email) {
        try {
            const user = await this.usersRepository.findOne({
                where: { email },
                relations: ['roles', 'posts'],
            });
            return user;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in receive user on email', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async role(dto) {
        try {
            const { role, userId } = dto;
            const user = await this.usersRepository.findOne({
                where: { id: userId },
                relations: ['roles'],
            });
            const userRole = await this.roleServise.getRolesByValue(role);
            user.roles.push(userRole);
            const save = await this.usersRepository.save(user);
            return save;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in receive user role', common_1.HttpStatus.FORBIDDEN);
        }
    }
    async ban(dto) {
        try {
            const { banReason, userId } = dto;
            const user = await this.usersRepository.findOne({
                where: { id: userId },
                relations: ['roles'],
            });
            user.banned = true;
            user.banReason = banReason;
            user.roles = [];
            const updateSave = await this.usersRepository.save(user);
            return updateSave;
        }
        catch (e) {
            throw new common_1.HttpException('Attemp set ban happen failed', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        roles_service_1.RolesService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map