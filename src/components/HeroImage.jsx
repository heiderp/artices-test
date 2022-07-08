import styles from "../styles/heroimage.module.css";
const HeroImage = () => {
  return (
    <section className={styles.hero}>
      <p className={styles.logo}>Logo</p>
      <h1 className={styles.heroTitle}>El Secreto de tu cocina</h1>
      <div className={styles.brush} />
    </section>
  );
};
export default HeroImage;
