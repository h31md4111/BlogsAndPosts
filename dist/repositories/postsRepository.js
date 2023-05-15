"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = exports.clearPostsDB = void 0;
let postsDB = [];
const clearPostsDB = () => {
    postsDB = [];
};
exports.clearPostsDB = clearPostsDB;
exports.postsRepository = {
    getAllPosts() {
        return postsDB;
    },
    findPostById(id) {
        return postsDB.find(p => p.id === id);
    },
    createNewPost(body) {
        const newPost = {
            id: (+(new Date())).toString(),
            title: body.title,
            shortDescription: body.shortDescription,
            content: body.content,
            blogId: body.blogId,
            blogName: body.blogName
        };
        postsDB.push(newPost);
        return newPost;
    },
    updatePostById(id, body) {
        const foundPost = postsDB.find(p => p.id === id);
        if (foundPost) {
            foundPost.title = body.title;
            foundPost.shortDescription = body.shortDescription;
            foundPost.content = body.content;
            foundPost.blogId = body.blogId;
            foundPost.blogName = body.blogName;
            return true;
        }
        else
            return false;
    },
    deletePostById(id) {
        for (let i = 0; i < postsDB.length; i++) {
            if (postsDB[i].id === id) {
                postsDB.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
