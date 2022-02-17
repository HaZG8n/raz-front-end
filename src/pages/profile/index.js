import styles from "src/commons/styles/profile.module.css";
import Image from "next/image";
import profile from "src/assets/img/profileraz.png";
import Banner from "src/commons/components/Banner/index";
import edit from "src/assets/img/edit.png"
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";

function Profile() {
  return (
    <>
      <main className={`${styles["main-section"]}`}>
          <Header />
        <div className={`${styles["jumbotron-section"]} row col-12 col-md-12`}>
          <Banner
            title="Profile"
            text="See your notifications for the latest updates"
          />
        </div>
        <div className={`${styles["edit-profile"]} row col-12 `}>
          <div className={`${styles["image-edit"]} col-md-2`}>
            <Image
              alt="profile"
              src={profile}
              width={50}
              height={50}
              className={styles["image-profile"]}
            />
          </div>
          <div className={`${styles["fill-edit"]} col-md-10`}>
            <p className={styles.name}>Syifa</p>
            <p className={styles.role}>as Seller</p>
          </div>
        </div>
        <section className={`${styles["fill-profile"]}`}>
          <form>
            <div className={`${styles["gender-profile"]} row col-md-12`}>
              <div className={`${styles["gender-fill"]} col-md-9`}>
                <p className={styles["word-gender"]}>Gender</p>
                <p className={styles["gender-type"]}>Female</p>
              </div>
              <div className={`${styles["edit-gender"]} col-md-3`}>
                <p className={styles["click-edit"]}>EDIT <Image src={edit} alt="edit" width={20} height={20}/> </p>
              </div>
            </div>
            <div className={`${styles["gender-profile"]} row col-md-12`}>
              <div className={`${styles["gender-fill"]} col-md-9`}>
                <p className={styles["word-gender"]}>Your Email</p>
                <p className={styles["gender-type"]}>syifa@gamil.com</p>
              </div>
              <div className={`${styles["edit-gender"]} col-md-3`}>
                <p className={styles["click-edit"]}>EDIT <Image src={edit} alt="edit" width={20} height={20}/> </p>
              </div>
            </div>
            <div className={`${styles["gender-profile"]} row col-md-12`}>
              <div className={`${styles["gender-fill"]} col-md-9`}>
                <p className={styles["word-gender"]}>Store Description</p>
                <p className={styles["gender-type"]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <div className={`${styles["edit-gender"]} col-md-3`}>
                <p className={styles["click-edit"]}>EDIT <Image src={edit} alt="edit" width={20} height={20}/> </p>
              </div>
            </div>
          </form>
        </section>
        <button className={`${styles["button-logout"]} btn`}>LOGOUT</button>
        <Footer />
      </main>
    </>
  );
}

export default Profile;
