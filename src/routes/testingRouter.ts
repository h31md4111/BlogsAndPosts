import {Request, Response, Router} from 'express';
import {blogsRepository, clearBlogsDB} from "../repositories/blogsRepository";
import {clearPostsDB, postsRepository} from "../repositories/postsRepository";

export const testingRouter = Router();


testingRouter.delete('/all-data',(req: Request, res: Response) => {
    clearBlogsDB()
    clearPostsDB()
    res.sendStatus(204);
})