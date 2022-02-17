import Header from "src/commons/components/Header";
import Banner from "src/commons/components/Banner";
import Layout from "src/commons/components/Layout";
import Footer from "src/commons/components/Footer";
import styles from "src/commons/styles/Cart.module.css";

function Checkout() {
  return (
    <>
      <Layout title={"Check Out"} />
      <Header />
      <Banner title={"Check Out"} text={"Pay and get your ordered items"} />
      <div className="checkout mb-5">
        <h3 className={`my-5 text-center`}>Self Information</h3>
        <form
          className={`d-flex flex-column me-auto ms-auto ${styles["form-checkout"]}`}
        >
          <input
            type="text"
            placeholder="Your Name *"
            className="mb-3 py-3 ps-4 form-control shadow-none"
          />
          <input
            type="text"
            placeholder="Address *"
            className="mb-3 py-3 ps-4 form-control shadow-none"
          />
          <div className="input-group mb-3">
            <span className="input-group-text">+62</span>
            <input
              type="text"
              placeholder="Phone Number *"
              className="form-control py-3 ps-4 shadow-none"
            />
          </div>
          <div className="input-group mt-3 mb-4">
              <span className={`input-group-text ${styles.visa}`}></span>
            <select
              id="payment"
              name="payment"
              className="form-select py-3 fw-bold shadow-none"
            >
              <option value="visa">Pay with Visa</option>
              <option value="debit">Pay with Debit</option>
            </select>
          </div>
          <button type="submit" className={`btn ${styles["btn-checkout"]} py-3`}>Check Out</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Checkout;
