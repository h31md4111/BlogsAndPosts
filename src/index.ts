import express from 'express';
import {blogsRouter} from './routes/blogsRouter';
import {postsRouter} from './routes/postsRouter';
import {testingRouter} from './routes/testingRouter';

export const app = express();
const port = process.env.PORT || 3000

app.use(express.json());

app.use("/blogs", blogsRouter)
app.use("/posts", postsRouter)
app.use("/testing", testingRouter)

app.listen(port, () => {
    console.log(`App listen on port ${port}`)
})