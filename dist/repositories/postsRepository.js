"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = exports.clearPostsDB = void 0;
const blogsRepository_1 = require("./blogsRepository");
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
        var _a;
        const blogNameById = (_a = blogsRepository_1.blogsRepository.findBlogById(String(body.blogId))) === null || _a === void 0 ? void 0 : _a.name;
        const newPost = {
            id: (+(new Date())).toString(),
            title: body.title,
            shortDescription: body.shortDescription,
            content: body.content,
            blogId: body.blogId,
            blogName: blogNameById,
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
