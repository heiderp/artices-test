import Card from "./Card";
import { useGetArticles } from "../hooks/useGetArticles";
import styles from "../styles/gallery.module.css";
const Gallery = () => {
  const { loading, articles } = useGetArticles();
  return (
    <div>
      {loading && <>Cargando</>}
      {!loading && (
        <div className={styles.gallery}>
          {articles.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              url={el.image}
              description={el.content}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
};
export default Gallery;
