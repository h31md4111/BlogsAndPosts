import {body} from 'express-validator';
import {blogsRepository} from "../repositories/blogsRepository";

const allPostsBodyValues: Array<string> = ['title', 'shortDescription', 'content', 'blogId']
const [title, shortDescription, content, blogId] = allPostsBodyValues

export const postsValidationMiddleware = [

    body(title)
        .exists().withMessage('title is not defined')
        .isString().withMessage('incorrect type of title value')
        .trim()
        .isLength({min:3, max:30}).withMessage('incorrect length of title field'),
    body(shortDescription)
        .exists().withMessage('shortDescription is not defined')
        .isString().withMessage('incorrect type of shortDescription value')
        .trim()
        .isLength({min:3, max:100}).withMessage('incorrect length of shortDescription field'),
    body(content)
        .exists().withMessage('content is not defined')
        .isString().withMessage('incorrect type of content value')
        .trim()
        .isLength({min:3, max:1000}).withMessage('incorrect length of content field'),
    body(blogId)
        .exists().withMessage('blogId is not defined')
        .isString().withMessage('incorrect type of blogId value')
        .trim()
        .custom(value => {return blogsRepository.findBlogById(value)}).withMessage('there is no blog with this id')
]