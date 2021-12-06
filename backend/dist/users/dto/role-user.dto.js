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
exports.RoleUserDto = void 0;
const role_enum_1 = require("../../auth/dto/role.enum");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class RoleUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'the user to whom a new role is added',
    }),
    (0, class_validator_1.IsString)({ message: 'Wrong role id' }),
    __metadata("design:type", String)
], RoleUserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'add new role user',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(role_enum_1.Role),
    __metadata("design:type", Object)
], RoleUserDto.prototype, "role", void 0);
exports.RoleUserDto = RoleUserDto;
//# sourceMappingURL=role-user.dto.js.map