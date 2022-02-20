import { Component } from "react";

import Image from "next/image";

import css from "src/commons/styles/Wishlist.module.css";
import sofa from "src/assets/img/sofa.png";
import check from "src/assets/svg/check.svg";

export default class index extends Component {
  render() {
    return (
      <>
        <div className={`row mb-5 ${css.card}`}>
          <div className="col-md-5 d-flex">
            <div className={`${css["img-wrapper"]}`}>
              <Image src={sofa} alt="product" layout="responsive" />
            </div>
            <p className="align-self-center mx-auto">{this.props.name}</p>
          </div>
          <div className="col-md-3 d-flex">
            <div className={`${css["icon-wrapper"]} align-self-center`}>
              <Image src={check} alt="check" layout="responsive" />
            </div>
            <p className="ms-3 align-self-center">{this.props.stock}</p>
          </div>
          <div className="col d-flex">
            <p className="fw-bold align-self-center">{this.props.total}</p>
            <div className="align-self-center ms-auto">
              <button className={`btn ${css["btn-wishlist"]} py-3 px-5 shadow-none`}>Add to Cart</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
