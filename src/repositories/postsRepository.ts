import {postViewModel} from "../models/postViewModel";
import {blogViewModel} from "../models/blogViewModel";
import {blogsRepository} from "./blogsRepository";
import {blogsDB} from "./blogsRepository";


export let postsDB: postViewModel[] = [];

export const clearPostsDB = (): void => {
    postsDB = [];
}

export const postsRepository = {
    getAllPosts() {
        return postsDB
    },

    findPostById(id: string) {
        return postsDB.find(p => p.id === id)
    },
    
    createNewPost(body: postViewModel) {
        const newPost: postViewModel = {
            id: (+(new Date())).toString(),
            title: body.title,
            shortDescription: body.shortDescription,
            content: body.content,
            blogId: body.blogId,
            blogName: body.blogName
        }
        postsDB.push(newPost)
        return newPost
    },

    updatePostById(id: string, body: postViewModel) {
        const foundPost: postViewModel | undefined = postsDB.find(p => p.id === id)
        if (foundPost) {
            foundPost.title = body.title
            foundPost.shortDescription = body.shortDescription
            foundPost.content = body.content
            foundPost.blogId = body.blogId
            return true;
        }
        else return false;
    },

    deletePostById(id: string) {
        for (let i = 0; i < postsDB.length; i++) {
            if (postsDB[i].id === id) {
                postsDB.splice(i, 1)
                return true;
            }
        }
        return false;
    }
}