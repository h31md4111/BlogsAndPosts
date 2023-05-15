"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const blogsRouter_1 = require("./routes/blogsRouter");
const postsRouter_1 = require("./routes/postsRouter");
const testingRouter_1 = require("./routes/testingRouter");
exports.app = (0, express_1.default)();
const port = process.env.PORT || 3000;
exports.app.use(express_1.default.json());
exports.app.use("/blogs", blogsRouter_1.blogsRouter);
exports.app.use("/posts", postsRouter_1.postsRouter);
exports.app.use("/testing", testingRouter_1.testingRouter);
exports.app.listen(port, () => {
    console.log(`App listen on port ${port}`);
});
