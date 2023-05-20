"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = exports.clearPostsDB = exports.postsDB = void 0;
exports.postsDB = [];
const clearPostsDB = () => {
    exports.postsDB = [];
};
exports.clearPostsDB = clearPostsDB;
exports.postsRepository = {
    getAllPosts() {
        return exports.postsDB;
    },
    findPostById(id) {
        return exports.postsDB.find(p => p.id === id);
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
        exports.postsDB.push(newPost);
        return newPost;
    },
    updatePostById(id, body) {
        const foundPost = exports.postsDB.find(p => p.id === id);
        if (foundPost) {
            foundPost.title = body.title;
            foundPost.shortDescription = body.shortDescription;
            foundPost.content = body.content;
            foundPost.blogId = body.blogId;
            return true;
        }
        else
            return false;
    },
    deletePostById(id) {
        for (let i = 0; i < exports.postsDB.length; i++) {
            if (exports.postsDB[i].id === id) {
                exports.postsDB.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
