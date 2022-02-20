import Header from "src/commons/components/Header";
import Banner from "src/commons/components/Banner";
import Layout from "src/commons/components/Layout";
import Footer from "src/commons/components/Footer";
import styles from "src/commons/styles/Cart.module.css";

import { Modal } from "react-bootstrap";

import { withRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { DelCart } from "src/redux/actions/product";
import { CheckOutProduct } from "src/commons/module/checkOut";

import { Component } from "react";

class checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_user: "",
      adress: "",
      phone: "",
      bank: "",
      dataBefore: [],
      va_number: [],
      isShow: false,
    };
  }

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data, () => {
      console.log(data);
    });
  };

  goCheckOut = () => {
    const body = {
      cart: this.props.cart,
      name_user: this.state.name_user,
      adress: this.state.adress,
      phone: this.state.phone,
      total_price: this.props.totalPrice.price,
      bank: this.state.bank,
    };
    console.log("body", body);
    const token = this.props.token;
    CheckOutProduct(body, token)
      .then((res) => {
        console.log("RESULT", res.data);
        const { va_number } = res.data.data.va_numbers[0];
        this.setState({ isShow: !this.state.isShow });
        this.setState({ va_number: va_number });
        this.props.DelCartProduct();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("STATE", this.props.totalPrice);
    return (
      <>
        <Layout title={"Check Out"} />
        <Header />
        <Banner title={"Check Out"} text={"Pay and get your ordered items"} />
        <div className="checkout mb-5">
          <h3 className={`my-5 text-center`}>Self Information</h3>
          <div className={`d-flex flex-column me-auto ms-auto ${styles["form-checkout"]}`}>
            <input type="text" placeholder="Your Name *" name="name_user" onChange={this.formChange} className="mb-3 py-3 ps-4 form-control shadow-none" />
            <input type="text" placeholder="Address *" name="adress" onChange={this.formChange} className="mb-3 py-3 ps-4 form-control shadow-none" />
            <div className="input-group mb-3">
              <span className="input-group-text">+62</span>
              <input type="text" name="phone" onChange={this.formChange} placeholder="Phone Number *" className="form-control py-3 ps-4 shadow-none" />
            </div>
            <div className="input-group mt-3 mb-4">
              <span className={`input-group-text ${styles.visa}`}></span>
              <select
                id="payment"
                onChange={(e) => {
                  this.setState({ bank: e.target.value });
                  console.log("FROM OPTION", this.state);
                }}
                name="bank"
                className="form-select py-3 fw-bold shadow-none"
              >
                <option value="bca">Pay with BCA</option>
                <option value="bni">Pay with BNI</option>
                <option value="bri">Pay with BRI</option>
              </select>
            </div>
            <button className={`btn ${styles["btn-checkout"]} py-3`} onClick={this.goCheckOut}>
              Check Out
            </button>
          </div>
          <div className={styles.modal}>
            <Modal show={this.state.isShow}>
              <Modal.Header>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => {
                    this.setState({ isShow: !this.state.isShow });
                  }}
                ></button>
              </Modal.Header>
              <Modal.Body>
                <p>Your Va Numbers: {this.state.va_number}</p>
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    if (this.state.bank == "bri") {
                      window.open("https://simulator.sandbox.midtrans.com/bri/va/index");
                    } else if (this.state.bank == "bni") {
                      window.open("https://simulator.sandbox.midtrans.com/bni/va/index");
                    } else {
                      window.open("https://simulator.sandbox.midtrans.com/bca/va/index");
                    }
                  }}
                >
                  Please Pay Your Payment
                </button>
              </Modal.Footer>
            </Modal>
          </div>

          {/* <button className={`btn ${styles["btn-checkout"]} py-3`} onClick={this.goCheckOut}>
              Check Out
            </button> */}
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("TESADIFHG", state);
  return {
    cart: state.cart.cart,
    token: state.auth.token,
    totalPrice: state.price,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    DelCartProduct: bindActionCreators(DelCart, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(checkout));
