import { useRouter } from "next/router";
import { useState } from "react";
import Banner from "src/commons/components/Banner";
import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import { resetPass } from "src/commons/module/auth";
import css from "src/commons/styles/forgotPass.module.css";

function ResetPassword() {
  const router = useRouter();

  const [input, setInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isReset, setIsReset] = useState(false);

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

  const handlePassword = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const resetPassword = (e) => {
    e.preventDefault();
    const { key } = router.query;
    if (validate()) {
      const body = {
        key_reset_pass: key,
        newPassword: input.newPassword,
        confirmPassword: input.confirmPassword,
      };
      console.log(body);
      resetPass(body)
        .then((res) => {
          setIsReset(true);
          setTimeout(() => {
            router.push("/auth");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <Layout title="Reset Password" />
      <Main>
        <Banner
          title="My Account"
          text="Register and log in with your account to be able to shop at will"
        />
        <div className={css.content}>
          <p>Reset Password</p>
          <p>Now you can create a new password for your Raz account.</p>
          <input
            className={`form-control shadow-none mb-4 ${
              errors.confirmPassword ? css.error : null
            }`}
            type="password"
            name="newPassword"
            placeholder="New Password *"
            value={input.newPassword}
            onChange={handlePassword}
          />
          <input
            className={`form-control shadow-none ${
              errors.confirmPassword ? css.error : null
            }`}
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password *"
            value={input.confirmPassword}
            onChange={handlePassword}
          />
          {errors.confirmPassword && (
            <p className={`text-danger mt-2`}>{errors.confirmPassword}</p>
          )}
          <button className="btn btn-secondary" onClick={resetPassword}>Reset Password</button>

          {/* Toast */}
            {/* <div hidden={!isReset} className={style.toast}>
              <p>Reset Password Successful</p>
            </div> */}
        </div>
      </Main>
    </>
  );
}

export default ResetPassword;
