import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import styles from "src/commons/styles/orderTrack.module.css";
import Image from "next/image";
import map from "src/assets/img/MapOrder.png";

import { getTrackOrder } from "src/commons/module/checkOut";
import { useSelector } from "react-redux";

import { useState } from "react";

import Link from "next/link";

function OrderTrack() {
  const [isSaerch, setIsSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const token = useSelector((state) => state.auth.token);

  const onClickSerch = () => {
    setIsSearch(!isSaerch);
  };
  console.log("TOKEN", token);

  const GetDataOrder = async () => {
    try {
      const search = keyword;
      const result = await getTrackOrder(search, token);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(keyword);

  return (
    <>
      <Layout title="Order Track">
        <Main>
          <Banner title={isSaerch == false ? "Order Tracking" : "Tracking Detail"} text="Track where your order arrived" />
          {isSaerch == false ? (
            <section className={`${styles["main-section"]} row col-12`}>
              <div className={`${styles["map-image"]} col-md-6`}>
                <Image alt="map" src={map} width={700} height={629} />
              </div>
              <div className={`${styles["form-info"]} col-md-6`}>
                <p className={styles.textOrder}>
                  To track your order please enter your Order ID in the box below and press the <br /> {' " '}Track{' " '} button. This was given to you on your receipt and in the confirmation <br /> email you should have received.
                </p>
                <label htmlFor="name" className={styles["form-label"]}>
                  Order ID :
                </label>
                <input
                  type="text"
                  className={`form-control ${styles.input} shadow-none`}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  name="bilEmail"
                  placeholder="Input your Order Id"
                />
                <button
                  onClick={() => {
                    onClickSerch();
                    GetDataOrder();
                  }}
                  className={`btn ${styles["button-track"]}`}
                >
                  Track Order
                </button>
              </div>
            </section>
          ) : (
            <section className={`${styles["main-section"]} row col-12`}>
              <div className={`${styles["map-image"]} col-md-6`}>
                <Image alt="map" src={map} width={700} height={629} />
              </div>
              <div className={`${styles["form-info"]} col-md-6`}>
                <div className={`${styles["order-info"]} row`}>
                  <div className={`${styles["order-id"]} col-md-6`}>
                    <label htmlFor="name" className={styles["form-label"]}>
                      Order ID :
                    </label>
                    <p className={styles.idOrder}>ABCD-EFGH-W123</p>
                  </div>
                  <div className={`${styles["order-item"]} col-md-6`}>
                    <label htmlFor="name" className={styles["form-label"]}>
                      Order Item :
                    </label>
                    <p className={styles.item}>Fabric Mid Century Chair</p>
                  </div>
                </div>
                <hr />
                <p className={styles["status-order"]}>On Delivery</p>
                <p className={styles["city-order"]}>Kebun Jeruk, Jakrta Barat</p>
                <p className={styles.destination}>Destination</p>
                <p className={styles.city}>Kebun Mangga, Jakarta Selatan</p>
                <button onClick={onClickSerch} className={`${styles["button-check"]} btn`}>
                  Check on Map
                </button>
              </div>
            </section>
          )}
        </Main>
      </Layout>
    </>
  );
}

export default OrderTrack;
