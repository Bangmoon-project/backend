//routes에 index.js가 갖는 의미가 뭔지?
const express = require("express");
const router = express.Router();

const likesRouter = require("./likes.routes");
const postsRouter = require("./posts.routes");

router.use("/posts/", [postsRouter, likesRouter]);
router.use("/like", likesRouter);

module.exports = router;
