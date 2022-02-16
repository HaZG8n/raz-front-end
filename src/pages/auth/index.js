import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/auth.module.css";
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import Banner from "src/commons/components/Banner";

class index extends Component {
  render() {
    return (
      <Layout title="Auth">
        <div className={css.wrapper}>
          <Header />
          <Banner title="My Account" text="Register and log in with your account to be able to shop at will" />
          <div className={css.content}></div>
          <Footer />
        </div>
      </Layout>
    );
  }
}

export default withRouter(index);
