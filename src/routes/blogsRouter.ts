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

blogsRouter.post('/',
    basicAuthMiddleware,
    blogsValidationMiddleware,
    errorsGetter,
    (req: Request, res: Response) => {
    const newBlog = blogsRepository.createNewBlog(req.body)
        if(!newBlog) res.sendStatus(400)
        res.status(201).send(newBlog)
    })

blogsRouter.put('/:id',
    basicAuthMiddleware,
    blogsValidationMiddleware,
    errorsGetter,
    (req: Request, res: Response) => {
    const isUpdated = blogsRepository.updateBlogById(req.params.id, req.body)
        if (!isUpdated) res.sendStatus(404)
        res.sendStatus(204)
    })

blogsRouter.delete('/:id', basicAuthMiddleware, (req: Request, res: Response) => {
    const isDeleted = blogsRepository.deleteBlogById(req.params.id)
    if (!isDeleted) res.sendStatus(404)
    res.sendStatus(204)
})

