const Post = require('../models/Post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create({ ...req.body, author: req.user._id });
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Get all posts
exports.getPosts = async (req, res) => {
    const posts = await Post.find()
        .populate('author', 'userName')
        .populate('category', 'name');
    res.json(posts);
}

// Get a single post by ID
exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
        .populate('author', 'userName')
        .populate('category', 'name');
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
}

// Update a post by ID
exports.updatePost = async (req, res) => {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body,
        { new: true, runValidators: true }
    );
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
}

// Delete a post by ID
exports.deletePost = async (req, res) => {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted successfully" });
}

