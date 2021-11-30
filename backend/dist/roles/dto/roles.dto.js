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
exports.RoleDto = exports.CreateRoleDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_user_dto_1 = require("../../users/dto/create-user.dto");
class CreateRoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'value role',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'description role',
    }),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
exports.CreateRoleDto = CreateRoleDto;
class RoleDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'id role',
    }),
    __metadata("design:type", String)
], RoleDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'value role',
    }),
    __metadata("design:type", String)
], RoleDto.prototype, "value", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'description role',
    }),
    __metadata("design:type", String)
], RoleDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user data',
    }),
    __metadata("design:type", create_user_dto_1.UserDto)
], RoleDto.prototype, "user", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'lastlatest data update role',
    }),
    __metadata("design:type", Date)
], RoleDto.prototype, "updatedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date create role',
    }),
    __metadata("design:type", Date)
], RoleDto.prototype, "createdDate", void 0);
exports.RoleDto = RoleDto;
//# sourceMappingURL=roles.dto.js.map