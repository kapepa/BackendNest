"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileService = void 0;
const common_1 = require("@nestjs/common");
const uuid = require("uuid");
const fs = require("fs");
const path = require("path");
let FileService = class FileService {
    async load(file) {
        try {
            const uuidName = uuid.v4();
            const extention = file.originalname.split('.').pop();
            const newName = `${uuidName}.${extention}`;
            const dir = path.resolve(__dirname, '..', 'static');
            if (!fs.existsSync(dir))
                fs.mkdirSync(dir, { recursive: true });
            const imageBuffer = Buffer.from(file.buffer);
            await fs.writeFileSync(`${dir}\\${newName}`, imageBuffer);
            return newName;
        }
        catch (e) {
            throw new common_1.HttpException('Happen mistake when file write down', common_1.HttpStatus.FORBIDDEN);
        }
    }
};
FileService = __decorate([
    (0, common_1.Injectable)()
], FileService);
exports.FileService = FileService;
//# sourceMappingURL=file.service.js.map