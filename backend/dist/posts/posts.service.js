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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const posts_entity_1 = require("./posts.entity");
const typeorm_2 = require("typeorm");
const users_service_1 = require("../users/users.service");
let PostsService = class PostsService {
    constructor(postsRepository, userService) {
        this.postsRepository = postsRepository;
        this.userService = userService;
    }
    async create(dto, profil) {
        try {
            const user = await this.userService.getUserByEmail(profil.email);
            const post = await this.postsRepository.create(dto);
            user.posts = [post];
            await this.postsRepository.save(post);
            await this.userService.upgradeUser(user);
            return post;
        }
        catch (e) {
            throw new common_1.HttpException('Happened mistake in create post', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(posts_entity_1.Posts)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map