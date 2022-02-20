import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/forgotPass.module.css";
import style from "src/commons/styles/auth.module.css";
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import Banner from "src/commons/components/Banner";
import { forgotPass } from "src/commons/module/auth";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isInput: false,
      isForgot: false,
      forgotErr: false,
    };
  }

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data, () => {
      console.log(this.state);
    });
    if (data.email == "") {
      this.setState({ isInput: false });
    } else {
      this.setState({ isInput: true });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: this.state.email,
      linkUrl: "http://localhost:3000/reset-password/",
    };
    // console.log(body);
    forgotPass(body)
      .then((res) => {
        this.setState({ isForgot: true });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ forgotErr: true });
      });
  };

  render() {
    return (
      <Layout title="Forgot password">
        <div className={css.wrapper}>
          <Header />
          <Banner
            title="My Account"
            text="Register and log in with your account to be able to shop at will"
          />
          <div className={css.content}>
            <p>Forgot your Password?</p>
            <p>
              Don’t worry! Just fill in your email and we’ll send you a link
            </p>
            <input
              className={`form-control shadow-none mb-4 ${this.state.forgotErr ? css.error : null}`}
              type="email"
              name="email"
              placeholder="Your email address *"
              aria-label="default input example"
              onChange={this.formChange}
            />
            <p hidden={!this.state.forgotErr} className="fw-bold text-danger">Email is not registered.</p>
            <button
              disabled={!this.state.isInput}
              onClick={this.handleSubmit}
              className="btn btn-secondary"
            >
              Reset Password
            </button>
            {/* Toast */}
            {/* <div hidden={!this.state.isForgot} className={style.toast}>
              <p>Please check your email.</p>
            </div> */}

          </div>
          <div className={css.footer}>
            <Footer />
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(index);
