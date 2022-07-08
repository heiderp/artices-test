import { useEffect, useState } from "react";
import { getArticles } from "../services/Articles";
const useGetArticles = (toshow) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getArticles(toshow)
      .then((articles) => {
        setArticles(articles);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [toshow]);
  return { articles, loading };
};
export { useGetArticles };
