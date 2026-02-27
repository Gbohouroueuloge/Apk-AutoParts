const express = require('express');
const router = express.Router();
const ctrlCategories = require('../controllers/ctrlCategories');

router.get('/', ctrlCategories.getCategories);
router.get('/:id', ctrlCategories.getCategorieById);
router.post('/', ctrlCategories.createCategory);
router.put('/:id', ctrlCategories.updateCategory);
router.delete('/:id', ctrlCategories.deleteCategory);
router.delete('/', ctrlCategories.deleteAllCategories);

module.exports = router;