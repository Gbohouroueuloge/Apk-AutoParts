const z = require('zod');
const articlesdb = require('../db/articlesdb');
const categoriesdb = require('../db/categoriesdb');

const validatorCreate = z.object({
  nom: z.string().min(3),
  prix: z.number(),
  quantite: z.number()
});

const getArticles = async (req, res) => {
  try {
    const articles = await articlesdb.getArticles();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getArticleById = async (req, res) => {
  try {
    const article = await articlesdb.getArticleById(req.params.id);
    res.status(200).json(article);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getActiclesByCategory = async (req, res) => {
  try {
    const articles = await articlesdb.getActiclesByCategory(req.params.id);
    res.render('index', { articles: articles });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const createArticle = async (req, res) => {
  try {
    const body = req.body
    const categorie = categoriesdb.getCategorieById(body.catId);
    if (!categorie) {
      return res.status(404).json({ error: 'Categorie not found' });
    }
    const article = validatorCreate.parse(req.body);
    const newArticle = await articlesdb.createArticle(article);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const updateArticle = async (req, res) => {
  try {
    const article = validatorCreate.parse(req.body);
    const updatedArticle = await articlesdb.updateArticle(req.params.id, article);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteArticle = async (req, res) => {
  try {
    if (!confirm("Etes vous sur de vouloir supprimer cet article ?")) return
    const deletedArticle = await articlesdb.deleteArticle(req.params.id);
    res.status(200).json(deletedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAllArticles = async (req, res) => {
  try {
    if (!confirm("Etes vous sur de vouloir supprimer tous les articles ?")) return
    const deletedArticles = await articlesdb.deleteAllArticles();
    res.status(200).json(deletedArticles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  getArticles,
  getArticleById,
  getActiclesByCategory,
  createArticle,
  updateArticle,
  deleteArticle,
  deleteAllArticles
}