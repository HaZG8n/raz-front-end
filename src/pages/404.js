import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/404.module.css";
import Link from "next/link";

// COMPONENTS
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";

class Custom404 extends Component {
  render() {
    return (
      <Layout title="404 Page Not Found">
        <div className={css.wrapper}>
          <Header />
          <div className={css.content}>
            <p>404</p>
            <p>Page cannot be found!</p>
            <p>
              Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor <br /> commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissi
            </p>
            <div className={css.link}>
              <hr />
              <Link href="/home">
                <a>BACK TO HOME PAGE</a>
              </Link>
            </div>
            <div className={css.circle}></div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withRouter(Custom404);
