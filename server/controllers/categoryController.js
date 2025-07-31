const Category = require('../models/category');

// Create a new category
exports.createCategory = async (req, res) => {
    const category = await Category.create(req.body);
    res.status(201).json(Category);
};

// Get all categories
exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json(categories);
};