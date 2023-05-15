"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRouter = void 0;
const express_1 = require("express");
const blogsRepository_1 = require("../repositories/blogsRepository");
const basicAuth_1 = require("../middlewares/basicAuth");
const blogsInputValidation_1 = require("../middlewares/blogsInputValidation");
const errorsGetter_1 = require("../middlewares/errorsGetter");
exports.blogsRouter = (0, express_1.Router)({});
exports.blogsRouter.get('/', (req, res) => {
    res.status(200).send(blogsRepository_1.blogsRepository.getAllBlogs());
});
exports.blogsRouter.get('/:id', (req, res) => {
    const blogId = req.params.id;
    const foundBlog = blogsRepository_1.blogsRepository.findBlogById(blogId);
    if (!foundBlog) {
        res.sendStatus(404);
    }
    else
        res.status(200).send(foundBlog);
});
exports.blogsRouter.post('/', basicAuth_1.basicAuthMiddleware, blogsInputValidation_1.blogsValidationMiddleware, errorsGetter_1.errorsGetter, (req, res) => {
    const newBlog = blogsRepository_1.blogsRepository.createNewBlog(req.body);
    if (!newBlog)
        res.sendStatus(400);
    res.status(201).send(newBlog);
});
exports.blogsRouter.put('/:id', basicAuth_1.basicAuthMiddleware, blogsInputValidation_1.blogsValidationMiddleware, errorsGetter_1.errorsGetter, (req, res) => {
    const isUpdated = blogsRepository_1.blogsRepository.updateBlogById(req.params.id, req.body);
    if (!isUpdated)
        res.sendStatus(404);
    res.sendStatus(204);
});
exports.blogsRouter.delete('/:id', basicAuth_1.basicAuthMiddleware, (req, res) => {
    const isDeleted = blogsRepository_1.blogsRepository.deleteBlogById(req.params.id);
    if (!isDeleted)
        res.sendStatus(404);
    res.sendStatus(204);
});
