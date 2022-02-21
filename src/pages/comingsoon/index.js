import styles from "src/commons/styles/comingsoon.module.css";
import Image from "next/image";

import facebook from "src/assets/svg/facebook.svg";
import twitter from "src/assets/svg/twitter.svg";
import youtube from "src/assets/svg/youtube.svg";
import dribble from "src/assets/svg/dribble.svg";

function ComingSoon() {
  return (
    <>
      <section className={`${styles["main-section"]} row`}>
        <div className={`${styles["form-coming"]} col-md-6`}>
          <p className={`${styles["text-coming"]}`}>
            We{"'"}re Building <br /> Something New
          </p>
          <div className={`${styles["days-coming"]} row`}>
            <div className={`${styles["coming-day"]} col-md-2`}>
              <p className={styles.num}>09</p>
              <p className={styles.day}>Days</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>18</p>
              <p className={styles.day}>Hours</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>36</p>
              <p className={styles.day}>Mins</p>
            </div>
            <div className={`${styles["coming-day"]} col-md-3`}>
              <p className={styles.num}>56</p>
              <p className={styles.day}>Secs</p>
            </div>
          </div>
          <input
            type="email"
            defaultValue="Your Email"
            className={styles.input}
          />
        </div>
        <div className={`${styles["form-coming"]} col-md-6`}></div>
        <div className={`${styles["left-icon"]} row col-md-6`}>
          <p className={`${styles["brand-icon"]} col-md-3`}>RAZ</p>
          <p className={`${styles["text-brand"]} col-md-9`}>
            Donec nunc nunc, gravida vitae diam vel, varius interdum erat.
            <br /> Quisque a nunc vel diam auctor commodo.
          </p>
        </div>
        <div className={`${styles["right-side"]} row col-md-6`}>
          <div className="col">
            <Image src={facebook} alt="avatar" />
          </div>
          <div className="col">
            <Image src={twitter} alt="avatar" />
          </div>
          <div className="col">
            <Image src={youtube} alt="avatar" />
          </div>
          <div className="col">
            <Image src={dribble} alt="avatar" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ComingSoon;