import styles from "../styles/index.module.scss";
import useState from "react";
import Image from "next/image";
import { useFormik } from "formik";

import * as Yup from "yup";

export default function Home() {
  const formSchema = Yup.object().shape({
    email: Yup.string()
      .required("Required email")
      .email("Digite um e-mail válido!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    formSchema,
    onSubmit: (values) => {
      console.log("Valores do formulário:", values);
    },
  });

  return (
    <main className={styles.newsletter}>
      <video autoPlay muted loop className={styles.newsletter__video}>
        <source src="/Wallpaper.mp4" type="video/mp4" />
      </video>
      <figure className={styles.newsletter__logo}>
        <Image
          className={styles.newsletter__image}
          src="/GenshinImact.png"
          width={350}
          height={220}
          alt="Genshi Impact"
        />
      </figure>

      <section className={styles.section}>
        <h2 className={styles.section__title}>Stay updated!</h2>

        <p className={styles.section__description}>
          Join 60,000+ product managers receiving monthly updates on:
        </p>

        <div className={styles.section__check}>
          <Image src="./CheckCircle.svg" width={20} height={20} alt="Check" />
          <p className={styles.section__text}>
            Product discovery and building what matters
          </p>
        </div>

        <div className={styles.section__check}>
          <Image src="./CheckCircle.svg" width={20} height={20} alt="Check" />
          <p className={styles.section__text}>
            Measuring to ensure updates are a success
          </p>
        </div>

        <div className={styles.section__check}>
          <Image src="./CheckCircle.svg" width={20} height={20} alt="Check" />
          <p className={styles.section__text}>And much more!</p>
        </div>

        <form onSubmit={formik.handleSubmit} className={styles.section__form}>
          <label className={styles.section__label} htmlFor="E-mail">
            E-mail
          </label>
          <input
            className={styles.section__input}
            id="E-mail"
            type="email"
            {...formik.getFieldProps("email")}
          />

          {formik.touched.email && formik.errors.email && (
            <div>{console.log(formik.errors.email)}</div>
          )}
          <button className={styles.section__button} type="submit">
            Subscribe to monthly newsletter!
          </button>
        </form>
      </section>
    </main>
  );
}
