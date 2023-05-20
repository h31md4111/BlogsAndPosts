"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = exports.clearBlogsDB = exports.blogsDB = void 0;
exports.blogsDB = [];
const clearBlogsDB = () => {
    exports.blogsDB = [];
};
exports.clearBlogsDB = clearBlogsDB;
exports.blogsRepository = {
    getAllBlogs() {
        return exports.blogsDB;
    },
    findBlogById(id) {
        return exports.blogsDB.find(b => b.id === id);
    },
    createNewBlog(body) {
        const newBlog = {
            id: (+(new Date())).toString(),
            name: body.name,
            description: body.description,
            websiteUrl: body.websiteUrl
        };
        exports.blogsDB.push(newBlog);
        return newBlog;
    },
    updateBlogById(id, body) {
        const foundBlog = exports.blogsDB.find(b => b.id === id);
        if (foundBlog) {
            foundBlog.name = body.name;
            foundBlog.description = body.description;
            foundBlog.websiteUrl = body.websiteUrl;
            return true;
        }
        else
            return false;
    },
    deleteBlogById(id) {
        for (let i = 0; i < exports.blogsDB.length; i++) {
            if (exports.blogsDB[i].id === id) {
                exports.blogsDB.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
