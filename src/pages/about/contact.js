import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner";
import styles from "src/commons/styles/contact.module.css"
import Image from "next/image";
import map from "src/assets/img/MapOrder.png"

function ContactUs() {
  return (
    <>
      <Layout title="Contact Us">
        <Main>
          <Banner
            title="Contact Us"
          />
          <section className={`${styles["main-section"]} row`}>
            <div className={`${styles["image-map"]} col-md-6`}>
                <Image 
                    src={map}
                    alt="map"
                    width={700}
                    height={854}
                />
            </div>
            <div className={`${styles["form-contact"]} col-md-6`}>
                <input
                  type="text"
                  className="form-contact"
                  name="orderId"
                  placeholder="Name *"
                />
                <input
                  type="text"
                  className="form-contact"
                  name="orderId"
                  placeholder="Your Email *"
                />
                <input
                  type="text"
                  className="form-contact"
                  name="orderId"
                  placeholder="Your Website"
                />
                <input
                  type="text"
                  className="form-contact"
                  name="orderId"
                  placeholder="Business Plan"
                />
                <textarea 
                placeholder="Message"
                className="form-contact"
                />
                <button className={`${styles["button-send"]} btn`}>Send Message</button>
            </div>
          </section>
        </Main>
      </Layout>
    </>
  );
}

export default ContactUs;
