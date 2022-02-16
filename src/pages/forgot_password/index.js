import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/forgotPass.module.css";
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import Banner from "src/commons/components/Banner";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      isInput: false,
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

  render() {
    return (
      <Layout title="Forgot password">
        <div className={css.wrapper}>
          <Header />
          <Banner title="My Account" text="Register and log in with your account to be able to shop at will" />
          <div className={css.content}>
            <p>Forgot your Password?</p>
            <p>Don’t worry! Just fill in your email and we’ll send you a link</p>
            <input className="form-control shadow-none" type="email" name="email" placeholder="Your email address *" aria-label="default input example" onChange={this.formChange} />
            <button disabled={!this.state.isInput} className="btn btn-secondary">
              Reset Password
            </button>
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
