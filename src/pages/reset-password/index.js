import Banner from "src/commons/components/Banner";
import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import css from "src/commons/styles/forgotPass.module.css";

function ResetPassword() {
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
          <p>
            Now you can create a new password for your Raz account.
          </p>
          <input
            className="form-control shadow-none mb-4"
            type="password"
            name="newPassword"
            placeholder="New Password *"
          />
           <input
            className="form-control shadow-none"
            type="password"
            name="confirmPassword"
            placeholder="Confirm New Password *"
          />
          <button className="btn btn-secondary">
            Reset Password
          </button>
        </div>
      </Main>
    </>
  );
}

export default ResetPassword;
