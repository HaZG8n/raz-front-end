import Image from "next/image";
import { withRouter } from "next/router";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCart } from "src/redux/actions/product";

import Header from "src/commons/components/Header";
import Banner from "src/commons/components/Banner";
import Layout from "src/commons/components/Layout";
import Footer from "src/commons/components/Footer";
import chair from "src/assets/img/Mask.png";
import remove from "src/assets/svg/close.svg";
import styles from "src/commons/styles/Cart.module.css";
import Cart from "src/commons/components/Cart";

class index extends Component {
  state = {
    counter: 1,
    cart: this.props.cart,
  };

  addCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter + 1,
    });
  };

  subCounter = () => {
    const newCounter = this.state.counter;
    this.setState({
      counter: newCounter - 1 < 1 ? 1 : newCounter - 1,
    });
  };

  // componentDidMount() {
  //   const data = [
  //     {
  //       id: 1,
  //       name: "rhymado",
  //       price: 10000,
  //     },
  //     {
  //       id: 1,
  //       name: "rhymado",
  //       price: 10000,
  //     },
  //   ];
  //   this.props.setUserCart(data);
  // }

  render() {
    const formater = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    return (
      <>
        <Layout title="Cart" />
        <Header />
        <Banner title="Your Cart" text="Buy everything in your cart now!" />
        <div className="container-fluid px-5 mt-5 mb-5">
          <div className="row">
            <section className="col-lg-8">
              <div className="row">
                <div className="col-md-5">
                  <p className={`${styles.title}`}>PRODUCTS</p>
                </div>
                <div className="col">
                  <p className={`${styles.title}`}>PRICE</p>
                </div>
                <div className="col-md-2 text-center">
                  <p className={`${styles.title}`}>QUANTITY</p>
                </div>
                <div className="col text-center">
                  <p className={`${styles.title}`}>TOTAL</p>
                </div>
              </div>

              {/* Card */}
              {Object.keys(this.state.cart).length == 0 ? null : (
                <Cart remove={remove} productImage={this.state.cart.image} name={this.state.cart.productName} price={formater.format(this.state.cart.price)} quantity={this.state.cart.stock} total={formater.format(this.state.cart.total)} />
              )}
              {/* end of card */}

              <hr />
              <div className="d-flex mb-3">
                <p className="text-muted px-3 ms-auto">Clear Cart</p>
                <p className="fw-bold">Update Cart</p>
              </div>
            </section>

            <section className={`col-lg-4 ${styles["bg-cart"]} mb-5`}>
              <div className="container">
                <p className="fw-bold my-4">Cart Total</p>
                <div className="d-flex">
                  <p className="fw-bold">Subtotal</p>
                  <p className="ms-auto fw-bold">{formater.format(this.state.cart.total)}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">Shipping</p>
                  <div className="form-check ms-auto">
                    <input className="form-check-input" type="radio" name="rate" />
                    <label className="form-check-label text-muted">Flat rate: {formater.format(this.state.cart.total)}</label>
                  </div>
                </div>
                <div className="d-flex">
                  <span></span>
                  <div className="form-check ms-auto mb-3">
                    <input className={`form-check-input ${styles["radio-btn"]}`} type="radio" name="shipping" />
                    <label className="form-check-label text-muted">Free Shipping</label>
                  </div>
                </div>
                <div className="d-flex">
                  <span></span>
                  <div className="form-check ms-auto">
                    <input className={`form-check-input ${styles["btn-radio"]}`} type="radio" name="pickup" />
                    <label className="form-check-label text-muted">Local Pickup</label>
                  </div>
                </div>
                <hr className="mt-5" />
                <div className="d-flex mb-5">
                  <p className="fw-bold">Total Price</p>
                  <p className="ms-auto fw-bold">{formater.format(this.state.cart.total)}</p>
                </div>
              </div>
              <button className={`btn ${styles["btn-cart"]} w-100 py-3`}>Procced To Check Out</button>
            </section>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};

export default withRouter(connect(mapStateToProps)(index));
