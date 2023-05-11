import {Request, Response, Router} from 'express';
import {blogsRepository, clearBlogsDB} from "../repositories/blogsRepository";
import {basicAuthMiddleware} from "../middlewares/basicAuth";
import {blogsValidationMiddleware} from "../middlewares/blogsInputValidation";
import {errorsGetter} from "../middlewares/errorsGetter";

export const blogsRouter = Router({});

blogsRouter.get('/', (req: Request, res:Response) => {
    res.status(200).send(blogsRepository.getAllBlogs())
})

blogsRouter.get('/:id', (req:Request, res:Response) => {
    const blogId = req.params.id;
    const foundBlog = blogsRepository.findBlogById(blogId)

    if(!foundBlog) {
        res.sendStatus(404)
    } else
    res.status(200).send(foundBlog);
    });


