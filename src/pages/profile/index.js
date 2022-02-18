import styles from "src/commons/styles/profile.module.css";
import Image from "next/image";
import profile from "src/assets/img/profileraz.png";
import Banner from "src/commons/components/Banner/index";
import edit from "src/assets/img/edit.png";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import CardProductOwner from "src/commons/components/ProductOwner";
import CardProduct from "src/commons/components/Product";
import { connect, useSelector } from "react-redux";
import { useState } from "react";
import Layout from "src/commons/components/Layout";
import { Modal, Button } from "react-bootstrap";

import { bindActionCreators } from "redux";
import { saveAction } from "src/redux/actions/auth";
import { updateProfile } from "src/commons/module/user";
import { GetUserProfile } from "src/commons/module/auth";

import { Router, useRouter } from "next/router";

function Profile(props) {
  // console.log(props)
  const userData = useSelector((state) => state.auth.userData);
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  // console.log(userData);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isEdit, setIsEdit] = useState(true);
  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      // email: e.target.email.value,
      gender: e.target.gender.value,
      username: e.target.name.value,
      store_name: e.target.storeDesc.value,
    };
    console.log(body);
    updateProfile(token, body)
      .then((res) => {
        console.log(res.data);
        const updateProf = res.data;
        GetUserProfile(token).then((res) => {
          console.log(res);
          const data = res.data.data;
          props.setUsers(data);
          console.log(data);
        });
      })
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
          <form onSubmit={handleSubmit}>
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
                <input
                  type="text"
                  className={styles.name}
                  name="name"
                  defaultValue={
                    userData.username !== null ? userData.username : "---"
                  }
                  disabled={isEdit}
                />
                <p className={styles.role}>as Seller</p>
              </div>
            </div>
            <section className={`${styles["fill-profile"]}`}>
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
                  <input
                    type="text"
                    className="form-profile"
                    name="storeDesc"
                    defaultValue={
                      userData.store_name !== null ? userData.store_name : "---"
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
              <button className={`${styles["button-logout"]} btn`}>
                LOGOUT
              </button>
              <button className={`${styles["button-save"]} btn`} type="submit">
                Save
              </button>
              <button
                className={`${styles["button-editPass"]} btn`}
                onClick={handleShow}
              >
                Edit Password
              </button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>EDIT PASSWORD</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form
                    className="form-container"
                  >
                    <label htmlFor="currentPass" className="current-pass">
                      Current Password :
                    </label>
                    <input
                      className="form-control current mb-3"
                      type="password"
                      name="currentPass"
                    />
                    <div className="text-danger mb-2">
                    </div>
                    <label htmlFor="newPass" className="new-pass">
                      New Password :
                    </label>
                    <input
                      className="form-control new"
                      type="password"
                      name="newPass"
                    />
                    <div className="text-danger mb-2">
                    </div>
                    <label htmlFor="confirmPass" className="confirm-pass">
                      Confirm New Password :
                    </label>
                    <input
                      className="form-control confirm"
                      type="password"
                      name="confirmPass"
                    />
                    <div className="text-danger mb-2">
                    </div>
                    <div className="col-md-12 text-center mt-5 changePass">
                      <button type="submit" className="btn btn-dark">
                        Change Password
                      </button>
                    </div>
                    <div className="col-md-12 text-center mt-3 cancel-edit">
                      <button
                        type="button"
                        className="btn"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </section>
          </form>
          <Footer />
        </main>
      </Layout>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state,
  };
};

const mapDispatchToProps = (dispacth) => {
  return {
    setUsers: bindActionCreators(saveAction, dispacth),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
