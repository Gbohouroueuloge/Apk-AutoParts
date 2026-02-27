const z = require('zod');
const categoriesdb = require('../db/categoriesdb');

const getCategories = async (req, res) => {
  try {
    const categories = await categoriesdb.getCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCategorieById = async (req, res) => {
  try {
    const categorie = await categoriesdb.getCategorieById(req.params.catId);
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const validatorCreate = z.object({
  nom: z.string().min(3),
  desc: z.string().nullable()
})

const createCategory = async (req, res) => {
  try {
    const category = validatorCreate.parse(req.body);
    console.log(category);
    const newCategory = await categoriesdb.createCategory(category);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = validatorCreate.parse(req.body);
    const updatedCategory = await categoriesdb.updateCategory(req.params.id, category);
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCategory = async (req, res) => {
  try {
    if (!confirm("Etes vous sur de vouloir supprimer cette categorie ?")) return
    const deletedCategory = await categoriesdb.deleteCategory(req.params.id);
    res.status(200).json(deletedCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAllCategories = async (req, res) => {
  try {
    if (!confirm("Etes vous sur de vouloir supprimer tous les categories ?")) return
    const deletedCategories = await categoriesdb.deleteAllCategory();
    res.status(200).json(deletedCategories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCategories,
  getCategorieById,
  createCategory,
  updateCategory,
  deleteCategory,
  deleteAllCategories
};