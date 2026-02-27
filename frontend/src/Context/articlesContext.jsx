import { createContext, useContext, useState, useEffect } from "react";
import articlesService from "../Services/articles";

const ArticlesContext = createContext();

export const useArticles = () => {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error("useArticles doit être utilisé à l'intérieur d'un ArticlesProvider");
  }
  return context;
}

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const response = await articlesService.getArticles();
      setArticles(response);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };


  const value = {
    articles,
    loadArticles,
  };

  return (
    <ArticlesContext.Provider value={value}>
      {children}
    </ArticlesContext.Provider>
  );
}