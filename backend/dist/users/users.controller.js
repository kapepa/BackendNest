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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guard/jwt-auth.guard");
const roles_decorator_1 = require("../auth/decorator/roles.decorator");
const role_enum_1 = require("../auth/dto/role.enum");
const role_user_dto_1 = require("./dto/role-user.dto");
const ban_user_dto_1 = require("./dto/ban-user.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(dto) {
        const user = await this.userService.createUser(dto);
        return user;
    }
    async getAllUser() {
        const user = await this.userService.getAllUser();
        return user;
    }
    async role(req, role) {
        const user = await this.userService.role(role);
        return user;
    }
    async ban(dto) {
        const user = await this.userService.ban(dto);
        return user;
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The record has been successfully created.',
        type: [create_user_dto_1.UserDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.User, role_enum_1.Role.Admin),
    (0, common_1.Post)('/all'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Receive all users',
        type: [create_user_dto_1.UserDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Post)('/role'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Set new role user!',
        type: [create_user_dto_1.UserDto],
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.UserDto, role_user_dto_1.RoleUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "role", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.Put)('/ban'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Ban user',
        type: [create_user_dto_1.UserDto],
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ban_user_dto_1.BanUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "ban", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map