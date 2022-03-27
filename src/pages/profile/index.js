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
import { useEffect, useState } from "react";
import Layout from "src/commons/components/Layout";
import { Modal, Button } from "react-bootstrap";
import MenuProfile from "src/commons/components/MenuProfile";

import { bindActionCreators } from "redux";
import { saveAction } from "src/redux/actions/auth";
import { editPassword, updateProfile } from "src/commons/module/user";
import { GetUserProfile, logout } from "src/commons/module/auth";
import defaultImage from "../../assets/img/ceramic.png";

import { Router, useRouter } from "next/router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Routing from "src/commons/components/Routing";

function Profile(props) {
  // console.log(props)
  const userData = useSelector((state) => state.auth.userData);
  const token = useSelector((state) => state.auth.token);
  const router = useRouter();

  // console.log(userData);
  const [showEdit, setShowEdit] = useState(false);
  const [username, setUserName] = useState("");
  const [storeDesc, setStoreDesc] = useState(null);
  const [gender, setGender] = useState(null);
  const [email, setEmail] = useState(null);
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [imgPrev, setImagePrev] = useState(null);
  const [imageShow, setImageShow] = useState(null);
  const [userProf, setUserProf] = useState("");
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isEditPassword, setIsEditPassword] = useState(false);
  console.log("USER", userData);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isEdit, setIsEdit] = useState(true);

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const body = {
  //     // email: e.target.email.value,
  //     gender: e.target.gender.value,
  //     username: e.target.name.value,
  //     store_name: e.target.storeDesc.value,
  //   };
  //   console.log(body);
  //   updateProfile(token, body)
  //     .then((res) => {
  //       console.log(res.data);
  //       const updateProf = res.data;
  //       GetUserProfile(token).then((res) => {
  //         console.log(res);
  //         const data = res.data.data;
  //          toast.success("Profile Diperbaharui", {
  //           position: toast.POSITION.TOP_RIGHT,
  //           autoClose: 3000,
  //         });
  //         props.setUsers(data);
  //         console.log(data);
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };

  const handleName = (e) => {
    const Name = e.target.value;
    setUserName(Name);
    console.log("name", name, "name lagi", Name);
  };

  const handleGender = (e) => {
    const Name = e.target.value;
    setGender(Name);
  };

  const handleStore = (e) => {
    const Name = e.target.value;
    setStoreDesc(Name);
  };

  const handleEmail = (e) => {
    const Name = e.target.value;
    setEmail(Name);
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log('ini file', file);
    setImage(file);
    setImagePrev(URL.createObjectURL(file));
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleSubmit = async () => {
    const form = new FormData();
    form.append("username", username);
    form.append("gender", gender);
    form.append("store_name", storeDesc);
    form.append("email", email);
    if (image) form.append("image", image);
    try {
      const result = await updateProfile(token, form);
      console.log("apa resultnya", result);
      // console.log(result.JSON(result));

      if (result.data.statusCoded === 200) {
        swalWithBootstrapButtons.fire({
          tittle: "Success",
          text: `${result.data.status}`,
          icon: "success",
        });
        // const result = await GetUserProfile(token);
        // console.log("iniresult", result);
        // if (result.data.status === 200) {
        //   swalWithBootstrapButtons.fire({
        //     tittle: "Success",
        //     text: `${result.data.status}`,
        //     icon: "success",
        //   });
        // }
      }
    } catch (error) {
      console.log({ ...error });
    }
  };

  const validate = () => {
    let errors = {};
    let isValid = true;

    if (
      typeof input.newPassword !== "undefined" &&
      typeof input.confirmPassword !== "undefined"
    ) {
      if (input.newPassword !== input.confirmPassword) {
        isValid = false;
        errors["confirmPassword"] = "Passwords don't match";
      }
    }
    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitPassword = (e) => {
    e.preventDefault();
    if (validate()) {
      const body = {
        oldPassword: input.oldPassword,
        newPassword: input.newPassword,
      };

      editPassword(token, body)
        .then((res) => {
          console.log(res);
          // setIsEditPassword(true);
          toast.success("Edit Password Successful", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          handleClose();
          router.push("/profile");
        })
        .catch((err) => {
          console.log(err);
          let errors = {};
          errors["oldPassword"] = "Password is invalid";
          setErrors(errors);
        });
    }
  };

  const onLogout = () => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        logout(token)
          .then((res) => console.log(res))
          .catch((err) => console.error(err));

        localStorage.clear("persist:root");
        Swal.fire({
          title: "Logout Successful",
          text: "You have successfully logged out",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 5000);
        router.push("/auth");
      }
    });
  };

  const handleOpen = () => {
    setShowEdit(!showEdit);
  };

  const GetUser = () => {
    GetUserProfile(token)
    .then((res) => {
      console.log('cekcek', res.data);
      setUserProf(res.data.data);
    })
    .catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <>
      <Layout title="Profile">
      <Routing type="private" user="user" />
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
          {userData.store_name !== "" ? <MenuProfile /> : null}
          {/* <form onSubmit={handleSubmit}> */}
          <div className={`${styles["edit-profile"]} row col-12 `}>
            <div className={`${styles["image-edit"]} col-md-2`}>
              {/* <Image alt="profile" src={profile} width={50} height={50} className={styles["image-profile"]} /> */}
              <div>
                {image &&
                (
                  <Image
                    src={imgPrev}
                    className="imageProfileWrapper"
                    alt="add pic"
                    width={50}
                    height={50}
                  />
                ) !== null ? (
                  <Image
                    src={imgPrev}
                    className="imageProfileWrapper"
                    alt="add pic"
                    width={50}
                    height={50}
                  />
                ) : (
                  <Image
                    src={defaultImage}
                    className="imageProfileWrapper"
                    alt="add pic"
                    width={50}
                    height={50}
                  />
                )}

                <div className="pencil-edit-promo">
                  <input
                    type="file"
                    id="file"
                    className="change-promo-img-btn img-edit-promo"
                    onChange={(e) => handleImage(e)}
                  />
                  <label
                    htmlFor="file"
                    className="input-file-edit-btn change-promo-img-btn"
                  >
                    <i className="bi bi-pencil"></i>
                  </label>
                </div>
              </div>
            </div>
            <div className={`${styles["fill-edit"]} col-md-10`}>
              {/* <input type="text" className={styles.name} name="name" defaultValue={userData.username !== null ? userData.username : "---"} disabled={isEdit} /> */}
              <input
                onChange={(e) => handleName(e)}
                className={styles.name}
                defaultValue={
                  userProf.username !== null ? userProf.username : "---"
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
                {/* <input
                  type="text"
                  className="form-profile"
                  name="gender"
                  defaultValue={
                    userData.gender !== null ? userData.gender : "---"
                  }
                  disabled={isEdit}
                /> */}
                <div className="row">
                  <input 
                    type="radio"
                    className={`${styles["form-gender"]} col-md-6`}
                  />
                  <label htmlFor="female" className={styles.inputGender}>
                    Female
                  </label>
                  <input 
                    type="radio"
                    className={`${styles["form-gender"]} col-md-6`}
                  />
                  <label htmlFor="Male" className={styles.inputGender}>
                    Male
                  </label>
                </div>
                
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
                  defaultValue={userProf.email}
                  disabled={isEdit}
                  onChange={(e) => handleEmail(e)}
                />
              </div>
              <div className={`${styles["edit-gender"]} col-md-3`}>
                <button
                  type="button"
                  className={styles["click-edit"]}
                  onClick={handleClick, () => {setShowEdit(true)}}
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
                  onChange={handleStore}
                />
              </div>
              <div className={`${styles["edit-gender"]} col-md-3`}>
                <button
                  type="button"
                  className={styles["click-edit"]}
                  onClick={handleClick, () => {setShowEdit(false)}}
                >
                  EDIT <Image src={edit} alt="edit" width={20} height={20} />{" "}
                </button>
              </div>
            </div>
            <button
              className={`${styles["button-logout"]} btn`}
              onClick={onLogout}
            >
              LOGOUT
            </button>
            {showEdit !== false ? (
              <button
                className={`${styles["button-save"]} btn`}
                type="submit"
                onChange={handleOpen}
                onClick={handleSubmit}
              >
                Save
              </button>
            ) : null}
            <button
              className={`${styles["button-editPass"]} btn`}
              onClick={handleShow}
            >
              Edit Password
            </button>
          </section>
          {/* </form> */}
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
              <form className="form-container" onSubmit={handleSubmitPassword}>
                <label htmlFor="currentPass" className="current-pass">
                  Current Password :
                </label>
                <input
                  className="form-control current mb-3 shadow-none"
                  type="password"
                  name="oldPassword"
                  value={input.oldPassword}
                  onChange={handleChange}
                />
                <div className="text-danger mb-2">{errors.oldPassword}</div>
                <label htmlFor="newPass" className="new-pass">
                  New Password :
                </label>
                <input
                  className="form-control shadow-none"
                  type="password"
                  name="newPassword"
                  value={input.newPassword}
                  onChange={handleChange}
                />
                <div className="text-danger mb-2"></div>
                <label htmlFor="confirmPass" className="confirm-pass">
                  Confirm New Password :
                </label>
                <input
                  className="form-control shadow-none"
                  type="password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChange}
                />
                <div className="text-danger mb-2">{errors.confirmPassword}</div>
                <div className="row col-md-12">
                  <div
                    className={`${styles["changePass"]} col-md-6 text-center`}
                  >
                    <button type="submit" className="btn btn-dark">
                      Change Password
                    </button>
                  </div>
                  <div
                    className={`${styles["changePass"]} col-md-6 text-center`}
                  >
                    <button type="button" className="btn" onClick={handleClose}>
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </Modal.Body>
          </Modal>
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
