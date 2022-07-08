import Card from "./Card";
import styles from "../styles/gallery.module.css";
const Gallery = ({ articles, loading }) => {
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
