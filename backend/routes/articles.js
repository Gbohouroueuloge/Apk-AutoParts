const express = require('express');
const router = express.Router();
const ctrlArticles = require('../controllers/ctrlArticles');

router.get('/', ctrlArticles.getArticles);
router.get('/:id', ctrlArticles.getArticleById);
router.get('/:catId', ctrlArticles.getActiclesByCategory);
router.post('/', ctrlArticles.createArticle);
router.put('/:id', ctrlArticles.updateArticle);
router.delete('/:id', ctrlArticles.deleteArticle);
router.delete('/', ctrlArticles.deleteAllArticles);

module.exports = router;