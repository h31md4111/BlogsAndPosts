import {postViewModel} from "../models/postViewModel";

let postsDB: postViewModel[] = [];

export const clearPostsDB = (): void => {
    postsDB = [];
}

export const postsRepository = {

}