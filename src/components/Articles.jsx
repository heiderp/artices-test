import Gallery from "./Gallery";
import Filtros from "./Filtros";
import styles from "../styles/articles.module.css";
import { useGetArticles } from "../hooks/useGetArticles";
import { useState } from "react";
const Articles = () => {
  const [articlesShow, setArticlesShow] = useState("Todos");
  const handleArticleShow = (data) => setArticlesShow(data);
  const { loading, articles } = useGetArticles(articlesShow);
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Nuestros Articulos</h2>
      <div className={styles.articles}>
        <Filtros handleArticleShow={handleArticleShow}></Filtros>
        <Gallery articles={articles} loading={loading}></Gallery>
      </div>
    </section>
  );
};
export default Articles;
