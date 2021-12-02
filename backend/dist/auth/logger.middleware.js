"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    const bearer = req.headers.authorization;
    const token = req.headers.authorization.split(' ').pop();
    next();
}
exports.logger = logger;
;
//# sourceMappingURL=logger.middleware.js.map