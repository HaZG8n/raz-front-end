import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import styles from "src/commons/styles/orderTrack.module.css";
import Image from "next/image";
import lamp from "src/assets/img/modern-lamp.png";

function OrderTrack() {
  return (
    <>
      <Layout title="Order Track">
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
              <p className={styles.textOrder}>
                To track your order please enter your Order ID in the box below
                and press the <br /> {' " '}Track{' " '} button. This was given to you
                on your receipt and in the confirmation <br /> email you should have
                received.
              </p>
              <form>
                <label htmlFor="name" className={styles["form-label"]}>
                  Order ID :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="orderId"
                  defaultValue="Found in your order confirmation email."
                />
                <label htmlFor="name" className={styles["form-label"]}>
                  Billing Email :
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="bilEmail"
                  defaultValue="Email you used during checkout"
                />
                <button className={`btn ${styles["button-track"]}`}>
                  Track Order
                </button>
              </form>
            </div>
          </section>
        </Main>
      </Layout>
    </>
  );
}

export default OrderTrack;
