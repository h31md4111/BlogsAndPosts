import {Request, Response, Router} from 'express';
import {postsRepository, clearPostsDB} from "../repositories/postsRepository";
import {basicAuthMiddleware} from "../middlewares/basicAuth";
import {postsValidationMiddleware} from "../middlewares/postsInputValidation";
import {errorsGetter} from "../middlewares/errorsGetter";
import {postViewModel} from "../models/postViewModel";

export const postsRouter = Router();

postsRouter.get('/', (req: Request, res: Response) => {
    res.status(200).send(postsRepository.getAllPosts())
})

postsRouter.get('/:id', (req: Request, res: Response) => {
    const isFound = postsRepository.findPostById(req.params.id)
    if (!isFound) res.sendStatus(404)
    res.status(201).send(isFound)
})

postsRouter.post('/', basicAuthMiddleware, postsValidationMiddleware, errorsGetter, (req: Request, res: Response) => {
    const newPost: postViewModel = postsRepository.createNewPost(req.body)
    if (!newPost) {
        res.sendStatus(400)
    } else {
        res.status(201).json(newPost)
    }
})

postsRouter.put('/:id',basicAuthMiddleware, postsValidationMiddleware, errorsGetter, (req: Request, res: Response) => {
    const isUpdated = postsRepository.updatePostById(req.params.id, req.body)
    const UpdatedPost = postsRepository.findPostById(req.body.id);
    if (!isUpdated) res.sendStatus(404)
    res.sendStatus(204).send(UpdatedPost)
})

postsRouter.delete('/:id', basicAuthMiddleware, (req: Request, res: Response) => {
    const isDeleted = postsRepository.deletePostById(req.params.id)
    if (!isDeleted) res.sendStatus(404)
    res.sendStatus(204)
})

