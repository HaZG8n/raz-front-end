import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/auth.module.css";
import Layout from "src/commons/components/Layout";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import Banner from "src/commons/components/Banner";
import Link from "next/link";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginAction, saveAction } from "src/redux/actions/auth";

// MODULE
import { login, SignUp as CreateAccount, GetUserProfile } from "src/commons/module/auth/index";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLogin: "",
      passwordLogin: "",
      emailSignup: "",
      passwordSignup: "",
      role: "",
      isLogin: false,
      isSignUp: false,
      loginErr: false,
      signupErr: false,
    };
  }

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data, () => {
      console.log(this.state);
    });
  };

  Login = () => {
    const body = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin,
    };
    login(body)
      .then((res) => {
        const token = res.data.data;
        this.props.setAuth(token);
        GetUserProfile(token)
          .then((result) => {
            console.log("USER DATA", result.data.data);
            const data = result.data.data;
            this.props.setUsers(data);
            setTimeout(() => {
              this.setState({ isLogin: !this.state.isLogin });
              console.log(this.state.isLogin);
            }, 500);
            setTimeout(() => {
              this.setState({ isLogin: !this.state.isLogin });
              console.log(this.state.isLogin);
              // this.props.router.push("/home");
            }, 3450);
          })
          .catch((error) => {
            console.log(error);
            this.setState({ loginErr: !this.state.loginErr }, () => {
              console.log(this.state.loginErr);
            });
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  signup = () => {
    const body = {
      email: this.state.emailSignup,
      password: this.state.passwordSignup,
      role: this.state.role,
    };
    CreateAccount(body)
      .then((res) => {
        console.log(res.data);
        setTimeout(() => {
          this.setState({ isSignUp: !this.state.isSignUp });
          console.log(this.state.isSignUp);
        }, 500);
        setTimeout(() => {
          this.setState({ isSignUp: !this.state.isSignUp });
          console.log(this.state.isSignUp);
          const data = {
            email: this.state.emailSignup,
            password: this.state.passwordSignup,
          };
          login(data)
            .then((result) => {
              const token = result.data.data;
              this.props.setAuth(token);
              GetUserProfile(token)
                .then((ress) => {
                  console.log("USER DATA", ress.data.data);
                  const data = result.data.data;
                  this.props.setUsers(data);
                  setTimeout(() => {
                    this.setState({ isLogin: !this.state.isLogin });
                    console.log(this.state.isLogin);
                  }, 500);
                  setTimeout(() => {
                    this.setState({ isLogin: !this.state.isLogin });
                    console.log(this.state.isLogin);
                  }, 3450);
                })
                .catch((errorr) => {
                  console.log(errorr);
                  this.setState({ loginErr: !this.state.loginErr }, () => {
                    console.log(this.state.loginErr);
                  });
                });
              setTimeout(() => {
                this.setState({ isLogin: !this.state.isLogin });
                console.log(this.state.isLogin);
              }, 500);
              setTimeout(() => {
                this.setState({ isLogin: !this.state.isLogin });
                console.log(this.state.isLogin);
                this.props.router.push("/home");
              }, 3450);
            })
            .catch((error) => {
              console.log(error);
            });
        }, 3450);
      })
      .catch((err) => {
        console.log(err);
        this.setState({ signupErr: !this.state.signupErr }, () => {
          console.log(this.state.signupErr);
        });
      });
  };

  render() {
    return (
      <Layout title="Auth">
        <div className={css.wrapper}>
          <Header />
          <Banner title="My Account" text="Register and log in with your account to be able to shop at will" />
          <div className={css.content}>
            <div className={css.grid}>
              <div className={css.login}>
                <p>Login</p>
                <input
                  className={`form-control shadow-none ${this.state.loginErr ? css.error : null}`}
                  type="email"
                  placeholder="User name or email address *"
                  name="emailLogin"
                  onChange={this.formChange}
                  aria-label="default input example"
                />
                <input className={`form-control shadow-none ${this.state.loginErr ? css.error : null}`} type="password" name="passwordLogin" onChange={this.formChange} placeholder="Password *" aria-label="default input example" />
                <p hidden={!this.state.loginErr}>Wrong Password or email</p>
                <button onClick={this.Login} className="btn btn-secondary">
                  Login
                </button>
                <div className={`form-check form-check-inline mt-3 ${css["radio-container"]} `}>
                  <input className={`form-check-input ${css.radio}`} type="checkbox" id="inlineCheckbox2" value="seller" />
                  <label className="form-check-label">Remember me</label>
                  <Link href="/forgot_password">
                    <a>Forget your password ?</a>
                  </Link>
                </div>
              </div>
              <div className={css.signup}>
                <p>Create Account</p>
                <input className={`form-control shadow-none ${this.state.signupErr ? css.error : null}`} type="email" name="emailSignup" onChange={this.formChange} placeholder="Email Address *" aria-label="default input example" />
                <input className={`form-control shadow-none ${this.state.signupErr ? css.error : null}`} type="password" name="passwordSignup" onChange={this.formChange} placeholder="Password *" aria-label="default input example" />
                <div className="form-check form-check-inline">
                  <input className={`form-check-input ${css.radio}`} type="checkbox" id="inlineCheckbox1" value="user" name="role" onChange={this.formChange} />
                  <label className="form-check-label">I`m Costumer</label>
                </div>
                <div className="form-check form-check-inline mt-3">
                  <input className={`form-check-input ${css.radio}`} name="role" type="checkbox" id="inlineCheckbox2" value="seller" onChange={this.formChange} />
                  <label className="form-check-label">I`m Seller</label>
                </div>
                <p hidden={!this.state.signupErr}>Sign Up Error,please try again</p>
                <button onClick={this.signup} className="btn btn-secondary">
                  Register
                </button>
              </div>
            </div>
            {/* TOAST */}
            <div hidden={!this.state.isLogin} className={css.toast}>
              <p>Login Success</p>
            </div>
            <div hidden={!this.state.isSignUp} className={css.toast}>
              <p>Sign Up Success</p>
            </div>
          </div>
          <div className={css.footer}>
            <Footer />
          </div>
        </div>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispacth) => {
  return {
    setUsers: bindActionCreators(saveAction, dispacth),
    setAuth: bindActionCreators(loginAction, dispacth),
  };
};

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(Auth));
