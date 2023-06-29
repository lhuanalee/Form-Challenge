import styles from "../styles/sucess.module.scss";
import Link from "next/link";

function Sucess() {
  return (
    <main className={styles.sucess}>
      <video autoPlay muted loop className={styles.sucess__video}>
        <source src="/Wallpaper.mp4" type="video/mp4" />
      </video>

      <div className={styles.box}>
        <h2 className={styles.box__title}> Thanks for subscribing!</h2>
        <p className={styles.box__description}>
          A confirmation will be sent to your email, please open and click the
          button to confirm your subscription!
        </p>

        <Link className={styles.box__link} href="/">
          Return
        </Link>
      </div>
    </main>
  );
}

export default Sucess;
