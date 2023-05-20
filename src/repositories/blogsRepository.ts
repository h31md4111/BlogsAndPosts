import {blogViewModel} from "../models/blogViewModel";

export let blogsDB: blogViewModel[] = [];

export const clearBlogsDB = (): void => {
    blogsDB = [];
}

export const blogsRepository = {

    getAllBlogs() {
        return blogsDB
    },

    findBlogById(id: string) {
        return blogsDB.find(b => b.id === id)
    },

    createNewBlog(body: blogViewModel) {
        const newBlog: blogViewModel = {
            id: (+(new Date())).toString(),
            name: body.name,
            description: body.description,
            websiteUrl: body.websiteUrl
        }
        blogsDB.push(newBlog)
        return newBlog
    },

    updateBlogById(id: string, body: blogViewModel) {
        const foundBlog: blogViewModel | undefined = blogsDB.find(b => b.id === id)
        if (foundBlog) {
            foundBlog.name = body.name
            foundBlog.description = body.description
            foundBlog.websiteUrl = body.websiteUrl
            return true;
        }
        else return false;
    },

    deleteBlogById(id: string) {
        for (let i = 0; i < blogsDB.length; i++) {
            if (blogsDB[i].id === id) {
                blogsDB.splice(i, 1)
                return true;
            }
        }
        return false;
    }

}