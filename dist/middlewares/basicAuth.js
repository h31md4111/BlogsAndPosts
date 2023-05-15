"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicAuthMiddleware = void 0;
const basicAuthMiddleware = (req, res, next) => {
    if (req.headers.authorization !== "Basic YWRtaW46cXdlcnR5") {
        res.sendStatus(401);
    }
    else {
        next();
    }
};
exports.basicAuthMiddleware = basicAuthMiddleware;
