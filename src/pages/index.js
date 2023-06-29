import styles from "../styles/index.module.scss";
import useState from "react";
import Image from "next/image";
import { useFormik } from "formik";

import { object, string } from "yup";

export default function Home() {
  const validationSchema = object().shape({
    email: string().email("Invalid email address!").required("Required field!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className={styles.section__span}>{formik.errors.email}</span>
          ) : null}
          <button className={styles.section__button} type="submit">
            Subscribe to monthly newsletter!
          </button>
        </form>
      </section>
    </main>
  );
}
