import Card from "./Card";
import styles from "../styles/gallery.module.css";
import Loader from "./Loader";
const Gallery = ({ articles, loading }) => {
  return (
    <div>
      {loading && <Loader />}
      {!loading && (
        <div className={styles.gallery}>
          {articles.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              url={el.image}
              description={el.content}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Gallery;
