"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
const blogsRepository_1 = require("../repositories/blogsRepository");
const allPostsBodyValues = ['title', 'shortDescription', 'content', 'blogId'];
const [title, shortDescription, content, blogId] = allPostsBodyValues;
exports.postsValidationMiddleware = [
    (0, express_validator_1.body)(title)
        .exists().withMessage('title is not defined')
        .isString().withMessage('incorrect type of title value')
        .trim()
        .isLength({ min: 3, max: 30 }).withMessage('incorrect length of title field'),
    (0, express_validator_1.body)(shortDescription)
        .exists().withMessage('shortDescription is not defined')
        .isString().withMessage('incorrect type of shortDescription value')
        .trim()
        .isLength({ min: 3, max: 100 }).withMessage('incorrect length of shortDescription field'),
    (0, express_validator_1.body)(content)
        .exists().withMessage('content is not defined')
        .isString().withMessage('incorrect type of content value')
        .trim()
        .isLength({ min: 3, max: 1000 }).withMessage('incorrect length of content field'),
    (0, express_validator_1.body)(blogId)
        .exists().withMessage('blogId is not defined')
        .isString().withMessage('incorrect type of blogId value')
        .trim()
        .custom(value => { return blogsRepository_1.blogsRepository.findBlogById(value); }).withMessage('there is no blog with this id')
];
