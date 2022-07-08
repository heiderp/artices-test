const list = ["Todos", "Productos", "Recetas", "Consejos"];
import styles from "../styles/filtros.module.css";
const Filtros = ({ handleArticleShow }) => {
  const handleSelect = (selected) => {
    handleArticleShow(selected);
  };
  return (
    <div className={styles.filter}>
      <ul className={styles.list}>
        {list.map((el) => (
          <li onClick={() => handleSelect(el)} className={styles.element}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Filtros;
