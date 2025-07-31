const express = require ("express");
const { createPost, getPosts, getPost, updatePost, deletePost} = require("../controllers/postController");
const { protect, authorize } = require("../middleware/auth");
const router = express.Router();

router.post("/", protect, authorize(["developer", "admin", "author", "editor"]), createPost);
router.get("/", protect, getPosts);
router.get("/:id", protect, getPost);
router.put("/:id", protect, authorize(["developer", "admin", "author", "editor"]), updatePost);
router.delete("/:id", protect, authorize(["developer", "admin"]), deletePost);

module.exports = router;