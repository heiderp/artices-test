import { useEffect } from "react";
import { useState } from "react";
import { getArticles } from "../services/Articles";
const useGetArticles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getArticles()
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return { articles, loading };
};
export { useGetArticles };
