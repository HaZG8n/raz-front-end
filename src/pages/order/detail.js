import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import styles from "src/commons/styles/orderTrack.module.css";
import Image from "next/image";
import lamp from "src/assets/img/modern-lamp.png";

function OrderDetail() {
  return (
    <>
      <Layout title="Order Detail">
        <Main>
          <Banner
            title="Order Tracking"
            text="Track where your order arrived"
          />
          <section className={`${styles["main-section"]} row col-12`}>
            <div className={`${styles["map-image"]} col-md-6`}>
              <Image alt="map" src={lamp} width={700} height={629} />
            </div>
            <div className={`${styles["form-info"]} col-md-6`}>
              <div className={`${styles["order-info"]} row`}>
                <div className={`${styles["order-id"]} col-md-6`}>
                  <label htmlFor="name" className={styles["form-label"]}>
                    Order ID :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="orderId"
                    defaultValue="Found in your order confirmation email."
                  />
                </div>
                <div className={`${styles["order-item"]} col-md-6`}>
                  <label htmlFor="name" className={styles["form-label"]}>
                    Order Item :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="orderId"
                    defaultValue="Found in your order confirmation email."
                  />
                </div>
              </div>
              <hr />
              <p>On Delivery</p>
              <p>Kebun Jeruk, Jakrta Barat</p>
              <p>Destination</p>
              <p>Kebun Mangga, Jakarta Selatan</p>
            </div>
          </section>
        </Main>
      </Layout>
    </>
  );
}

export default OrderDetail;
