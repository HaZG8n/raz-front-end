import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/Wishlist.module.css";

import Card from "src/commons/components/wishlist";

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
          <Card name="Kursi Terbaik" stock="20" total="500.000" />
          {/* end of card */}
        </div>
      </Main>
    </>
  );
}

export default Wishlist;
