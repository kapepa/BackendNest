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
exports.BanUserDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class BanUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'user who got banned',
    }),
    (0, class_validator_1.IsString)({ message: 'Wrong role id' }),
    __metadata("design:type", String)
], BanUserDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'why the user was blocked',
    }),
    (0, class_validator_1.IsString)({ message: 'Wrong banReason' }),
    __metadata("design:type", String)
], BanUserDto.prototype, "banReason", void 0);
exports.BanUserDto = BanUserDto;
//# sourceMappingURL=ban-user.dto.js.map