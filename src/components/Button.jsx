import styles from "../styles/button.module.css";
const Button = ({ children, disabled = false }) => {
  return (
    <button disabled={disabled} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
