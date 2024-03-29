const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth-middleware");

const CommentsController = require("../controllers/comments.controller");
const commentsController = new CommentsController();

// 댓글 생성 API
router.post(
  "/:postId/comments",
  authMiddleware,
  commentsController.createComment,
);

// 댓글 목록 조회 API
router.get("/:postId/comments", commentsController.getComments);

// 댓글 수정 API
router.put(
  "/:postId/comments/:commentId",
  authMiddleware,
  commentsController.updateComment,
);

// 댓글 삭제 API
router.delete(
  "/:postId/comments/:commentId",
  authMiddleware,
  commentsController.deleteComment,
);
module.exports = router;
