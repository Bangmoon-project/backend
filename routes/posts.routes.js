const express = require("express");
const router = express.Router();

const PostsController = require("../controllers/posts.controller");
const authMiddleware = require("../middlewares/auth-middleware");
const postsController = new PostsController();
//여기까지 쭉 파일을 다 읽어온 후에

//게시글 작성하기 api/posts
router.post("/", authMiddleware, postsController.createPost); 

//모든 게시물 가져오기 api/posts
router.get("/", postsController.getPosts); // authMiddleware 제거

router.get("/nickname/", authMiddleware, postsController.getNickname);
//특정 게시물 가져오기
router.get("/:postId", postsController.getPost); // authMiddleware 제거

//게시물 수정하기
router.put("/:postId", authMiddleware, postsController.putPost); 

//게시물 삭제하기
router.delete("/:postId",authMiddleware, postsController.deletePost); 

module.exports = router;
