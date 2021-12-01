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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    wrapperJwt(user) {
        return {
            access_token: this.jwtService.sign({
                email: user.email,
                password: user.password,
                sub: user.id,
            }),
        };
    }
    async login(dto) {
        const user = await this.userService.getUserByEmail(dto.email);
        const isMatch = await bcrypt.compare(dto.password, user.password);
        if (user && isMatch)
            return this.wrapperJwt(user);
        throw new common_1.UnauthorizedException({ message: 'wrong email either password' });
    }
    async registration(dto) {
        const candidate = await this.userService.getUserByEmail(dto.email);
        if (candidate)
            throw new common_1.HttpException(candidate, common_1.HttpStatus.BAD_REQUEST);
        const hash = await bcrypt.hash(dto.password, Number(process.env.BCRYPT_SALT));
        const create = await this.userService.createUser(Object.assign(Object.assign({}, dto), { password: hash }));
        return this.wrapperJwt(create);
    }
    async validateUser() {
        console.log('validateUser');
        return null;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map