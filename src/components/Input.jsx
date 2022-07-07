import styles from "../styles/input.module.css";
const Input = ({ disabled, placeholder }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default Input;
