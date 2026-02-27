import axios from "axios";

const BASE_URL = "http://localhost:3000/api/categories";

const getCategories = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const getCategoryById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(BASE_URL, category);
  return response.data;
};

const updateCategory = async (id, category) => {
  const response = await axios.put(`${BASE_URL}/${id}`, category);
  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

const deleteAllCategories = async () => {
  const response = await axios.delete(BASE_URL);
  return response.data;
};

export default {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  deleteAllCategories,
}