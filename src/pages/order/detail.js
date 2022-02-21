import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import styles from "src/commons/styles/orderTrack.module.css";
import Image from "next/image";
import map from "src/assets/img/MapOrder.png";
import icon from "src/assets/img/delivery.png";

function OrderDetail() {
  return (
    <>
      <Layout title="Order Detail">
        <Main>
          <Banner title="Tracking Detail" text="Track where your order arrived" />
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
              <button className={`${styles["button-check"]} btn`}>Check on Map</button>
            </div>
          </section>
        </Main>
      </Layout>
    </>
  );
}

export default OrderDetail;
