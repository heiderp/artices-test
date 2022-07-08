import styles from "../styles/button.module.css";
const Button = ({ type, children, disabled = false }) => {
  return (
    <button type={type} disabled={disabled} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
