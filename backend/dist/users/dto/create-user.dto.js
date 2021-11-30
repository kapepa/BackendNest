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
exports.UserDto = exports.CreateUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user email',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user password',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;
class UserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'unique id',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user email',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user password',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user banned',
    }),
    __metadata("design:type", Boolean)
], UserDto.prototype, "banned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user reason',
    }),
    __metadata("design:type", String)
], UserDto.prototype, "banReason", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'roles user',
    }),
    __metadata("design:type", Array)
], UserDto.prototype, "roles", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'lastlatest data update user',
    }),
    __metadata("design:type", Date)
], UserDto.prototype, "updatedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date create users',
    }),
    __metadata("design:type", Date)
], UserDto.prototype, "createdDate", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=create-user.dto.js.map