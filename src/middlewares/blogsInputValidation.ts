import {body} from 'express-validator';

const allBlogsBodyValues = ['name', 'description', 'websiteUrl']
const [name, description, websiteUrl] = allBlogsBodyValues

export const blogsValidationMiddleware = [
    body(allBlogsBodyValues).isString().trim().withMessage('Incorrect type input value'),
    body(name)
        .exists()
        .withMessage('name is not defined')
        .isLength({min:3, max:15})
        .withMessage('incorrect length of name field'),
    body(description)
        .exists()
        .withMessage('description is not defined')
        .isLength({min:3, max:500})
        .withMessage('incorrect length of description field'),
    body(websiteUrl)
        .exists()
        .withMessage('websiteUrl is not defined')
        .isLength({min:3, max:100})
        .withMessage('incorrect length of websiteUrl field')
        .matches('^https://([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$')
        .withMessage('incorrect Url address')

]