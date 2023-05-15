"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testingRouter = void 0;
const express_1 = require("express");
const blogsRepository_1 = require("../repositories/blogsRepository");
const postsRepository_1 = require("../repositories/postsRepository");
exports.testingRouter = (0, express_1.Router)();
exports.testingRouter.delete('/all-data', (req, res) => {
    (0, blogsRepository_1.clearBlogsDB)();
    (0, postsRepository_1.clearPostsDB)();
    res.sendStatus(204);
});
