import styles from "../styles/contact.module.css";
import { Formik, Field, Form } from "formik";
import { postArticles } from "../services/Articles";
import Button from "./Button";
import { useEffect } from "react";
const Contact = () => {
  const init = { firstname: "", lastname: "", email: "", phone: "" };
  const validation = (values, isSubmiting) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Requerido";
    }
    if (!values.lastname) {
      errors.firstname = "Requerido";
    }
    if (!values.email) {
      errors.email = "Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email Invalido";
    }
    if (!values.phone) {
      errors.phone = "Requerido";
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    console.log(setSubmitting);
    postArticles(values)
      .then((data) => {
        setSubmitting(true);
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Contactanos</h2>
      <div className={styles.brush} />
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
              <Button type="submit" disabled={isSubmiting}>
                Enviar
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
