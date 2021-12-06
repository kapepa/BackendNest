"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const Roles = (...roles) => (0, common_1.SetMetadata)(process.env.ROLES_KEY, roles);
exports.Roles = Roles;
//# sourceMappingURL=roles.decorator.js.map