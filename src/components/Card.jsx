import styles from "../styles/card.module.css";
const Card = ({ title, description, url }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.articleimg} src={url} alt="img" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDes}>{description}</p>
        <div className={styles.extra}>
          <button className={styles.more}>Ver mas</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
