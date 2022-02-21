import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/Wishlist.module.css";

import Card from "src/commons/components/wishlist";

import { deletWishList, setWishList } from "src/redux/actions/product";
import { useSelector, useDispatch } from "react-redux";

function Wishlist() {
  const state = useSelector((state) => state);
  const selector = useDispatch();
  const { wishList } = state.wishList;

  const removeItems = (idx) => {
    console.log(`del ${idx}`);
    const prods = [...wishList];
    const idxItems = prods.findIndex((vals) => {
      return vals.product_id === idx;
    });

    if (idxItems !== -1) {
      prods.splice(idxItems, 1);
    }
    selector(setWishList(prods));
  };

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
          {wishList.map((val, idx) => {
            return (
              <>
                {console.log("val", val)}
                <Card idx={val.product_id} rmAction={removeItems} setCartData={val} data={val} key={idx} name={val.productName} stock={val.quantity} total={val.total_price} />
              </>
            );
          })}
          {/* end of card */}
        </div>
      </Main>
    </>
  );
}

export default Wishlist;
