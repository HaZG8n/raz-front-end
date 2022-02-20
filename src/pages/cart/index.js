import Image from "next/image";
import { withRouter } from "next/router";
import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setCart, setTotalPrice } from "src/redux/actions/product";

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
    totalPrice: 0,
    key: {},
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

  removeItems = (idx) => {
    console.log(`del ${idx}`);
    const prods = [...this.props.cart];
    const idxItems = prods.findIndex((vals) => {
      return vals.product_id === idx;
    });

    if (idxItems !== -1) {
      prods.splice(idxItems, 1);
    }

    this.props.setCartData(prods);
  };

  calCulate = () => {
    const prods = [...this.props.cart];
    let toals = 0;
    if (prods.length > 0) {
      prods.forEach((vals) => {
        console.log(vals);
        toals = toals + vals.total_price;
      });
    }

    this.setState({ totalPrice: toals });
    this.props.setTotal(toals);
  };

  componentDidMount() {
    this.calCulate();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart.length !== this.props.cart.length) {
      this.calCulate();
    }
  }

  render() {
    const formater = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    console.log("CART", this.state.cart);
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
              {this.props.cart.map((val) => {
                console.log("val", val);
                return (
                  <>
                    <Cart
                      idx={val.product_id}
                      key={val.product_id}
                      remove={remove}
                      productImage={chair}
                      rmAction={this.removeItems}
                      name={val.productName}
                      price={formater.format(val.price)}
                      quantity={val.quantity}
                      total={formater.format(val.total_price)}
                    />
                  </>
                );
              })}
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
                  <p className="ms-auto fw-bold">{formater.format(this.state.totalPrice)}</p>
                </div>
                <div className="d-flex">
                  <p className="fw-bold">Shipping</p>
                  <div className="form-check ms-auto">
                    <input className="form-check-input" type="radio" name="rate" />
                    <label className="form-check-label text-muted">Flat rate: {formater.format(this.state.totalPrice)}</label>
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
                  <p className="ms-auto fw-bold">{formater.format(this.state.totalPrice)}</p>
                </div>
              </div>
              <button
                className={`btn ${styles["btn-cart"]} w-100 py-3`}
                onClick={() => {
                  this.props.router.push("/cart/checkout");
                }}
              >
                Procced To Check Out
              </button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCartData: bindActionCreators(setCart, dispatch),
    setTotal: bindActionCreators(setTotalPrice, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));
