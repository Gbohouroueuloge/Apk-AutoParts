const pool = require('./pool');

const getArticles = async () => {
  const {rows} = await pool.query('SELECT * FROM articles ORDER BY created_at DESC');
  return rows;
};

const getArticleById = async (id) => {
  const {rows} = await pool.query('SELECT * FROM articles WHERE id = $1', [id]);
  return rows[0];
};

const getActiclesByCategory = async (catId) => {
  const {rows} = await pool.query('SELECT * FROM articles WHERE categories_id = $1 ORDER BY created_at DESC', [catId]);
  return rows;
};

const createArticle = async (article) => {
  const {rows} = await pool.query('INSERT INTO articles (nom, prix, quantite, categories_id) VALUES ($1, $2, $3, $4) RETURNING *', [article.nom, article.prix, article.quantite, article.categories_id]);
  return rows[0];
}

const updateArticle = async (id, article) => {
  const {rows} = await pool.query('UPDATE articles SET nom = $1, prix = $2, quantite = $3 WHERE id = $4 RETURNING *', [article.nom, article.prix, article.quantite, id]);
  return rows[0];
}

const deleteArticle = async (id) => {
  const {rows} = await pool.query('DELETE FROM articles WHERE id = $1 RETURNING *', [id]);
  return rows[0];
}

const deleteAllArticles = async () => {
  const {rows} = await pool.query('DELETE FROM articles');
  return rows[0];
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