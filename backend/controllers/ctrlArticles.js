const z = require('zod');
const articlesdb = require('../db/articlesdb');
const categoriesdb = require('../db/categoriesdb');

const validatorCreate = z.object({
  nom: z.string().min(3),
  categorie_id: z.number(),
  prix: z.number(),
  quantite: z.number()
});

const getArticles = async (req, res) => {
  try {
    if (req.query.catId) {
      const articles = await articlesdb.getActiclesByCategory(req.query.catId);
      return res.status(200).json(articles);
    }
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

const createArticle = async (req, res) => {
  try {
    const body = req.body
    const categorie = await categoriesdb.getCategorieById(body.categorie_id);
    if (!categorie) {
      return res.status(404).json({ error: `Categorie with id ${body.categorie_id} not found` });
    }
    const article = validatorCreate.parse(body);
    const newArticle = await articlesdb.createArticle(article);
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message, body: req.body });
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
    const deletedArticle = await articlesdb.deleteArticle(req.params.id);
    res.status(200).json(deletedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const deleteAllArticles = async (req, res) => {
  try {
    const deletedArticles = await articlesdb.deleteAllArticles();
    res.status(200).json(deletedArticles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  deleteAllArticles
}