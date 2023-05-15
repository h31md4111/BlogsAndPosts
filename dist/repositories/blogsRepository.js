"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = exports.clearBlogsDB = void 0;
let blogsDB = [];
const clearBlogsDB = () => {
    blogsDB = [];
};
exports.clearBlogsDB = clearBlogsDB;
exports.blogsRepository = {
    getAllBlogs() {
        return blogsDB;
    },
    findBlogById(id) {
        return blogsDB.find(b => b.id === id);
    },
    createNewBlog(body) {
        const newBlog = {
            id: (+(new Date())).toString(),
            name: body.name,
            description: body.description,
            websiteUrl: body.websiteUrl
        };
        blogsDB.push(newBlog);
        return newBlog;
    },
    updateBlogById(id, body) {
        const foundBlog = blogsDB.find(b => b.id === id);
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
        for (let i = 0; i < blogsDB.length; i++) {
            if (blogsDB[i].id === id) {
                blogsDB.splice(i, 1);
                return true;
            }
        }
        return false;
    }
};
