const pool = require('./pool');

const getCategories = async () => {
  const {rows} = await pool.query('SELECT * FROM categories ORDER BY created_at DESC');
  return rows;
};

const getCategorieById = async (id) => {
  const {rows} = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
  return rows[0];
};

const createCategory = async (category) => {
  const {rows} = await pool.query('INSERT INTO categories (nom, description) VALUES ($1, $2) RETURNING *', [category.nom, category.desc]);
  return rows[0];
}

const updateCategory = async (id, category) => {
  const {rows} = await pool.query('UPDATE categories SET nom = $1, description = $2 WHERE id = $3 RETURNING *', [category.nom, category.desc, id]);
  return rows[0];
}

const deleteCategory = async (id) => {
  const {rows} = await pool.query('DELETE FROM categories WHERE id = $1 RETURNING *', [id]);
  return rows[0];
}

const deleteAllCategory = async () => {
  const {rows} = await pool.query('DELETE FROM categories');
  return rows[0];
}

module.exports = { 
  getCategories, 
  getCategorieById, 
  createCategory, 
  updateCategory, 
  deleteCategory, 
  deleteAllCategory 
};