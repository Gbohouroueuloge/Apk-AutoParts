import axios from "axios";

const BASE_URL = "http://localhost:3000/api/articles";

const getArticles = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

const getArticleById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

const createArticle = async (article) => {
  const response = await axios.post(BASE_URL, article);
  return response.data;
};

const updateArticle = async (id, article) => {
  const response = await axios.put(`${BASE_URL}/${id}`, article);
  return response.data;
};

const deleteArticle = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};

const deleteAllArticles = async () => {
  const response = await axios.delete(BASE_URL);
  return response.data;
};

export default {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  deleteAllArticles,
};
