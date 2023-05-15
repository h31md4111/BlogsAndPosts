"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsValidationMiddleware = void 0;
const express_validator_1 = require("express-validator");
const allBlogsBodyValues = ['name', 'description', 'websiteUrl'];
const [name, description, websiteUrl] = allBlogsBodyValues;
exports.blogsValidationMiddleware = [
    (0, express_validator_1.body)(allBlogsBodyValues).isString().trim().withMessage('Incorrect type input value'),
    (0, express_validator_1.body)(name)
        .exists()
        .withMessage('name is not defined')
        .isLength({ min: 3, max: 35 })
        .withMessage('incorrect length of name field'),
    (0, express_validator_1.body)(description)
        .exists()
        .withMessage('description is not defined')
        .isLength({ min: 3, max: 500 })
        .withMessage('incorrect length of description field'),
    (0, express_validator_1.body)(websiteUrl)
        .exists()
        .withMessage('websiteUrl is not defined')
        .isLength({ min: 3, max: 100 })
        .withMessage('incorrect length of websiteUrl field')
        .matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$')
        .withMessage('incorrect Url address')
];
