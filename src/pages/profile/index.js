import styles from "src/commons/styles/profile.module.css";
import Image from "next/image";
import profile from "src/assets/img/profileraz.png";
import Banner from "src/commons/components/Banner/index";
import edit from "src/assets/img/edit.png";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import CardProductOwner from "src/commons/components/ProductOwner";
import CardProduct from "src/commons/components/Product";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateProfile } from "src/commons/module/user";
import Layout from "src/commons/components/Layout";

function Profile() {
  const userData = useSelector((state) => state.auth.userData);
  const token = useSelector((state) => state.auth.token);
  // console.log(token)
  console.log(userData);
  const [isEdit, setIsEdit] = useState(true);
  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      email: e.target.email.value,
      gender: e.target.gender.value,
    };
    console.log(updateProfile);
    updateProfile(body, token)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Layout title="Profile">
        <main className={`${styles["main-section"]}`}>
          <Header />
          <div
            className={`${styles["jumbotron-section"]} row col-12 col-md-12`}
          >
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
              <p className={styles.name}>
                {userData.username !== null ? userData.username : "---"}
              </p>
              <p className={styles.role}>as Seller</p>
            </div>
          </div>
          <section className={`${styles["fill-profile"]}`}>
            <form onSubmit={handleSubmit}>
              <div className={`${styles["gender-profile"]} row col-md-12`}>
                <div className={`${styles["gender-fill"]} col-md-9`}>
                  <p className={styles["word-gender"]}>Gender</p>
                  <input
                    type="text"
                    className="form-profile"
                    name="gender"
                    defaultValue={
                      userData.gender !== null ? userData.gender : "---"
                    }
                    disabled={isEdit}
                  />
                </div>
                <div className={`${styles["edit-gender"]} col-md-3`}>
                  <button
                    type="button"
                    className={styles["click-edit"]}
                    onClick={handleClick}
                  >
                    EDIT <Image src={edit} alt="edit" width={20} height={20} />{" "}
                  </button>
                </div>
              </div>
              <div className={`${styles["gender-profile"]} row col-md-12`}>
                <div className={`${styles["gender-fill"]} col-md-9`}>
                  <p className={styles["word-gender"]}>Your Email</p>
                  <input
                    type="text"
                    className="form-profile"
                    name="email"
                    defaultValue={userData.email}
                    disabled={isEdit}
                  />
                </div>
                <div className={`${styles["edit-gender"]} col-md-3`}>
                  <button
                    type="button"
                    className={styles["click-edit"]}
                    onClick={handleClick}
                  >
                    EDIT <Image src={edit} alt="edit" width={20} height={20} />{" "}
                  </button>
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
                  <button
                    type="button"
                    className={styles["click-edit"]}
                    onClick={handleClick}
                  >
                    EDIT <Image src={edit} alt="edit" width={20} height={20} />{" "}
                  </button>
                </div>
              </div>
              <button type="submit">Save</button>
            </form>
          </section>
          <button className={`${styles["button-logout"]} btn`}>LOGOUT</button>
          <Footer />
        </main>
      </Layout>
    </>
  );
}

export default Profile;
