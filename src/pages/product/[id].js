import { Component } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import css from "src/commons/styles/productDetail.module.css";
import { GetProductDetail } from "src/commons/module/product";
import { Breadcrumb } from "react-bootstrap";
import Image from "next/image";

// REDUX
import { setCart, DelCart, setWishList } from "src/redux/actions/product";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";

// IMAGE
import Chair from "src/assets/img/chair-home.png";
import Kursi from "src/assets/img/ceramic.png";

import Mobil from "src/assets/img/delivery-fast.png";
import Measure from "src/assets/img/measurement.png";
import Pin from "src/assets/img/pin-check.png";
import LoadingComp from "src/commons/components/LoadingComp";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      productImg: [],
      jumboImg: "",
      review: false,
      isErr: 0,
      stock: 1,
      isAdd: false,
      imgSrc: "",
      modalText: "",
      animated: true,
    };
    this.onError = this.onError.bind(this);
  }

  onError(ids) {
    this.setState({ isErr: ids });
  }

  getProduct = () => {
    const token = this.props.token;
    const id = this.props.router.query.id;
    GetProductDetail(id, token)
      .then((res) => {
        this.setState({ product: res.data.data, productImg: res.data.data.image });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  plusCounter = () => {
    const { stock } = this.state;
    if (this.state.stock < this.state.product.stock) {
      this.setState({ stock: stock + 1 });
    } else {
      return;
    }
  };

  subCounter = () => {
    const { stock } = this.state;
    if (this.state.stock > 1) {
      this.setState({ stock: stock - 1 });
    } else {
      return;
    }
  };

  addToCart = () => {
    const product = [
      ...this.props.cart,
      {
        productName: this.state.product.name,
        product_id: this.state.product.id,
        image: this.state.productImg[0].image,
        quantity: this.state.stock,
        price: this.state.product.price,
        total_price: this.state.product.price * this.state.stock,
        user_id: this.state.product.user_id,
      },
    ];
    this.props.setCartData(product);
    setTimeout(() => {
      this.setState({ isAdd: !this.state.isAdd, modalText: "Add to cart Success" });
    }, 500);
    setTimeout(() => {
      this.setState({ isAdd: !this.state.isAdd, modalText: "" });
    }, 3440);
  };

  addTOWishList = () => {
    const product = [
      ...this.props.wishList,
      {
        productName: this.state.product.name,
        product_id: this.state.product.id,
        image: this.state.productImg[0].image,
        quantity: this.state.stock,
        price: this.state.product.price,
        total_price: this.state.product.price * this.state.stock,
      },
    ];
    this.props.setWishtListData(product);
    setTimeout(() => {
      this.setState({ isAdd: !this.state.isAdd, modalText: "Add to Wishlist Success" });
    }, 500);
    setTimeout(() => {
      this.setState({ isAdd: !this.state.isAdd, modalText: "" });
    }, 3440);
  };

  async componentDidMount() {
    try {
      const token = this.props.token;
      const id = this.props.router.query.id;
      const res = await GetProductDetail(id, token);
      this.setState({ product: res.data.data, productImg: res.data.data.image, animated: false });
    } catch (ers) {
      console.log(ers);
    }
  }

  render() {
    const formater = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    console.log("DATA PRODUCT", this.state.product);
    if (!this.state.animated) {
      return (
        <>
          <Layout title="Product Detail" />
          <Main>
            <div className={css.wrapper}>
              <div className={css.bread}>
                <Breadcrumb>
                  <Breadcrumb.Item href="/product">Product </Breadcrumb.Item>
                  <Breadcrumb.Item href="#" active>
                    {this.state.product.name}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className={css.imgContainer}>
                <div className={css.side}>
                  {this.state.productImg.length !== 0
                    ? this.state.productImg.map((val) => {
                        return (
                          <>
                            <Image
                              onClick={() => {
                                this.setState({ jumboImg: val.image });
                              }}
                              key={val.id}
                              height={134}
                              width={140}
                              src={this.state.imgSrc !== Chair ? val.image : this.state.imgSrc}
                              onError={() => {
                                this.setState({ imgSrc: Chair });
                              }}
                              alt="product image"
                            />
                          </>
                        );
                      })
                    : null}
                </div>
                <div className={css.main}>
                  <Image src={this.state.jumboImg !== "" ? this.state.jumboImg : Chair} width={890} height={705} alt="product image" />
                </div>
              </div>
              <div className={css.productName}>
                <p>{this.state.product.name}</p>
                <div className={css.icons}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color="#1A1A1A" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color="#1A1A1A" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color="#1A1A1A" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color="#1A1A1A" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" color="#1A1A1A" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                </div>
                <p className={css.price}>{formater.format(this.state.product.price)}</p>
                <p className={css.stock}>
                  <i className="bi bi-check-circle"></i>
                  {this.state.product.stock} Stock
                </p>
              </div>
              <p className={css.desc}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices exurabitur ut magna dignissim, dignissiNullam vitae venenatis elit. Proin dui lacus, viverra
                at imperdiet non, facilisis eget orci. Vivamus ac elit tellus. Vestibulum nulla dui, consequat vitae diam eu, pretium finibus libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. Aliquam vitae neque tellus.
              </p>
              <div className={css.buttonContainer}>
                <div className={css.stockCounter}>
                  <button className="btn btn-secondary" onClick={this.subCounter}>
                    -
                  </button>
                  <p className={css.total}>{this.state.stock}</p>
                  <button className="btn btn-secondary" onClick={this.plusCounter}>
                    +
                  </button>
                </div>
                <button className={`btn btn-secondary ${css.cartBtn}`} onClick={this.addToCart}>
                  Add to cart
                </button>
                <button className={`btn btn-secondary ${css.love}`}>
                  <i className="bi bi-heart"></i>
                </button>
                <button onClick={this.addTOWishList} className={`btn btn-secondary ${css.wish}`}>
                  Add To Wishlist
                </button>
              </div>
              <div className={css.detail}>
                <ul>
                  <li>Categories: urniture, Interior, Chair </li>
                  <li>Tag: Furniture, Chair, Scandinavian, Modern</li>
                  <li>Product Id: {this.state.product.id}</li>
                </ul>
              </div>
              <div className={css.add}>
                <p>
                  <Image src={Mobil} alt="mobil" />
                  Delivery And Return
                </p>
                <p>
                  <Image src={Measure} alt="mobil" />
                  Size Guide
                </p>
                <p>
                  <Image src={Pin} alt="mobil" />
                  Store available
                </p>
              </div>
              <div className={css.media}>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-twitter"></i>
                <i className="bi bi-youtube"></i>
              </div>
              <div className={css.nav}>
                <p>Description</p>
                <p>Review</p>
                <p>Additional Information </p>
                <p>About Brand</p>
                <p>Shipping & Delivery</p>
              </div>
              <div className={css.content}>
                <Image src={this.state.jumboImg !== "" ? this.state.jumboImg : Chair} alt="product" height={200} width={200} />
                <div className={css.text}>
                  <p>
                    Donec accumsan auctor iaculis. Sed suscipit arcu ligula, at egestas magna molestie a. Proin ac ex maximus, ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque.
                    Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu..
                  </p>
                  <ul>
                    <li>Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper</li>
                    <li>Aliquam est et tempus. Eaecenas libero ante, tincidunt vel</li>
                  </ul>
                  <p>Nunc lacus elit, faucibus ac laoreet sed, dapibus ac mi. Maecenas eu ante a elit tempus fermentum. Aliquam commodo tincidunt semper. Phasellus accum</p>
                </div>
              </div>
              <div className={css.related}>
                <p>Related Products</p>
                <div className={css.cardContainer}>
                  <div className={css.card}>
                    <Image src={Chair} width={360} height={450} alt="product related    " />
                    <figcaption>
                      {" "}
                      <span>Coaster 506222-CO Loveseat</span> <span>{formater.format(this.state.product.price)}</span>
                    </figcaption>
                  </div>
                  <div className={css.card}>
                    <Image src={Chair} width={360} height={450} alt="product related    " />
                    <figcaption>
                      {" "}
                      <span>Coaster 506222-CO Loveseat</span> <span>{formater.format(this.state.product.price)}</span>
                    </figcaption>
                  </div>
                  <div className={css.card}>
                    <Image src={Chair} width={360} height={450} alt="product related    " />
                    <figcaption>
                      {" "}
                      <span>Coaster 506222-CO Loveseat</span> <span>{formater.format(this.state.product.price)}</span>
                    </figcaption>
                  </div>
                </div>
              </div>
              {/* TOAST */}
              <div hidden={!this.state.isAdd} className={css.toast}>
                <p>{this.state.modalText}</p>
              </div>
            </div>
          </Main>
        </>
      );
    } else {
      return (
      <LoadingComp />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    users: state.auth.userData,
    cart: state.cart.cart,
    wishList: state.wishList.wishList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCartData: bindActionCreators(setCart, dispatch),
    DeletCart: bindActionCreators(DelCart, dispatch),
    setWishtListData: bindActionCreators(setWishList, dispatch),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(index));
