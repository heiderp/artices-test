import styles from "../styles/card.module.css";
const Card = ({ title, description, url }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={url} alt="img" />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default Card;
