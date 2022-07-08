import styles from "../styles/contact.module.css";
import { Formik, Field, Form } from "formik";
import { postArticles } from "../services/Articles";
import Button from "./Button";
const Contact = () => {
  const init = { firstname: "", lastname: "", email: "", phone: "" };
  const validation = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email Invalido";
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    console.log(setSubmitting);
    postArticles(values)
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Contactanos</h2>
      <Formik
        initialValues={init}
        validate={validation}
        onSubmit={handleSubmit}
      >
        {({ isSubmiting }) => (
          <Form className={styles.formulario}>
            {Object.keys(init).map((el, i) => (
              <div key={i} className={styles.group}>
                <label className={styles.upperfield} htmlFor="nombre">
                  {el}
                </label>
                <Field
                  type={el == "email" ? "email" : "text"}
                  className={styles.field}
                  name={el}
                />
              </div>
            ))}
            <div className={styles.contentButton}>
              <Button disabled={isSubmiting}>Enviar</Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
