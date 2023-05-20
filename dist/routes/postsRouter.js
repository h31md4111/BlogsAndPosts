"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const postsRepository_1 = require("../repositories/postsRepository");
const basicAuth_1 = require("../middlewares/basicAuth");
const postsInputValidation_1 = require("../middlewares/postsInputValidation");
const errorsGetter_1 = require("../middlewares/errorsGetter");
exports.postsRouter = (0, express_1.Router)();
exports.postsRouter.get('/', (req, res) => {
    res.status(200).send(postsRepository_1.postsRepository.getAllPosts());
});
exports.postsRouter.get('/:id', (req, res) => {
    const isFound = postsRepository_1.postsRepository.findPostById(req.params.id);
    if (!isFound)
        res.sendStatus(404);
    res.status(201).send(isFound);
});
exports.postsRouter.post('/', basicAuth_1.basicAuthMiddleware, postsInputValidation_1.postsValidationMiddleware, errorsGetter_1.errorsGetter, (req, res) => {
    const newPost = postsRepository_1.postsRepository.createNewPost(req.body);
    if (!newPost) {
        res.sendStatus(400);
    }
    else {
        res.status(201).json(newPost);
    }
});
exports.postsRouter.put('/:id', basicAuth_1.basicAuthMiddleware, postsInputValidation_1.postsValidationMiddleware, errorsGetter_1.errorsGetter, (req, res) => {
    const isUpdated = postsRepository_1.postsRepository.updatePostById(req.params.id, req.body);
    const UpdatedPost = postsRepository_1.postsRepository.findPostById(req.body.id);
    if (!isUpdated)
        res.sendStatus(404);
    res.sendStatus(204).send(UpdatedPost);
});
exports.postsRouter.delete('/:id', basicAuth_1.basicAuthMiddleware, (req, res) => {
    const isDeleted = postsRepository_1.postsRepository.deletePostById(req.params.id);
    if (!isDeleted)
        res.sendStatus(404);
    res.sendStatus(204);
});
