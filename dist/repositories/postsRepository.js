"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRepository = exports.clearPostsDB = exports.postsDB = void 0;
const blogsRepository_1 = require("./blogsRepository");
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
        var _a;
        const blogNameById = (_a = blogsRepository_1.blogsRepository.findBlogById(body.blogId)) === null || _a === void 0 ? void 0 : _a.name;
        const newPost = {
            id: (+(new Date())).toString(),
            title: body.title,
            shortDescription: body.shortDescription,
            content: body.content,
            blogId: body.blogId,
            blogName: blogNameById || ''
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
