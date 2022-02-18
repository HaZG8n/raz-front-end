import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/Wishlist.module.css";
import sofa from "src/assets/img/sofa.png";
import check from "src/assets/svg/check.svg";

function Wishlist() {
  return (
    <>
      <Layout title="Wishlist" />
      <Main>
        <Banner title="Wishlist" text="Pay and get your ordered items" />
        <div className="container">
          <div className={`row mt-5 ${css.title}`}>
            <hr />
            <div className="col-md-5">Product</div>
            <div className="col-md-3">Stock Status</div>
            <div className="col">Price</div>
            <hr className="mt-3 mb-5" />
          </div>
          {/* card */}
          <div className="row mb-5">
            <div className="col-md-5 d-flex">
              <div className={`${css["img-wrapper"]}`}>
                <Image src={sofa} alt="product" layout="responsive" />
              </div>
              <p className="align-self-center mx-auto">Product Name</p>
            </div>
            <div className="col-md-3 d-flex">
              <div className={`${css["icon-wrapper"]} align-self-center`}>
                <Image src={check} alt="check" layout="responsive" />
              </div>
              <p className="ms-3 align-self-center">In stock</p>
            </div>
            <div className="col d-flex">
              <p className="fw-bold align-self-center">$765.99</p>
              <div className="align-self-center ms-auto">
                <button className={`btn ${css["btn-wishlist"]} py-3 px-5 shadow-none`}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* end of card */}
        </div>
      </Main>
    </>
  );
}

export default Wishlist;
