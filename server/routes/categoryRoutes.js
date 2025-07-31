const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// Routes for categories
router.post('/', protect, authorize(['developer', 'admin']), createCategory);
router.get('/', protect, getCategories);

module.exports = router;