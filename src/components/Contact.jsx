import styles from "../styles/contact.module.css";
import { useFormik } from "formik";
import { postArticles } from "../services/Articles";
import Button from "./Button";
import cn from "classnames";

const Contact = () => {
  const init = { firstname: "", lastname: "", email: "", phone: "" };
  const validation = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = "Nombre Requerido";
    } else if (!/[a-zA-Z]/i.test(values.firstname)) {
      errors.firstname = "Nombre Invalido";
    }
    if (!values.lastname) {
      errors.lastname = "Apellido Requerido";
    } else if (!/[a-zA-Z]/i.test(values.lastname)) {
      errors.lastname = "Nombre Invalido";
    }
    if (!values.email) {
      errors.email = "Email Requerido";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Email Invalido";
    }
    if (!values.phone) {
      errors.phone = "Telefono Requerido";
    } else if (!/[0-9]{11}/gi.test(values.phone)) {
      errors.phone = "Telefono Invalido";
    }
    return errors;
  };

  const handleSubmit = (values, actions) => {
    console.log(formik);
    formik.setSubmitting(true)
    postArticles(values)
      .then((data) => {
        console.log(data);
        formik.setSubmitting(false)
      })
      .catch((err) => console.error(err));
  };
  const formik = useFormik({
    initialValues: init,
    validate: validation,
    onSubmit: handleSubmit,
  });
  return (
    <section className={styles.container}>
      <h2 className={styles.subtitle}>Contáctanos</h2>
      <figure className={styles.brush} />
      <form className={styles.formulario} onSubmit={formik.handleSubmit}>
        {Object.keys(init).map((el, i) => (
          <div key={i} className={styles.group}>
            <label className={styles.upperfield} htmlFor={el}>
              {el === "firstname" && "Nombre"}
              {el === "lastname" && "Apellido"}
              {el === "email" && "Mail"}
              {el === "phone" && "Telefono"}
            </label>
            <input
              type="text"
              name={el}
              className={cn({
                [styles.field]: true,
                [styles.fieldError]: formik.touched[el] && formik.errors[el],
              })}
              onChange={formik.handleChange}
              value={formik.values[el]}
            />
            {formik.touched[el] && formik.errors[el] ? (
              <p className={styles.msgError}>{formik.errors[el]}</p>
            ) : null}
          </div>
        ))}
        <div className={styles.contentButton}>
          <Button type="submit" disabled={false}>
            Enviar
          </Button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
