import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/Faq.module.css";
import shopping from "src/assets/svg/shopping.svg";
import misc from "src/assets/svg/misc.svg";
import payment from "src/assets/svg/payment.svg";

function FAQ() {
  return (
    <>
      <Layout title="FAQ" />
      <Main>
        <Banner title="FAQ" text="Frequently Asked Questions" />
        <div className={`container ${css.content}`}>
          <div className="d-flex mt-5 justify-content-center">
            <div className={`${css["icon-wrapper"]}`}>
              <Image src={shopping} alt="Shopping" layout="responsive" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <hr className={`${css.hr}`} />
            <h3 className="px-5">Shopping Questions</h3>
            <hr className={`${css.hr}`} />
          </div>
          <section className="row">
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you ship worldwide?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I use a coupon code?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you offer gift-vouchers?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I request a refund?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
          </section>

          <div className="d-flex mt-4 justify-content-center">
            <div className={`${css["icon-wrapper"]}`}>
              <Image src={payment} alt="Shopping" layout="responsive" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <hr className={`${css.hr}`} />
            <h3 className="px-5">Payment Questions</h3>
            <hr className={`${css.hr}`} />
          </div>
          <section className="row">
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you ship worldwide?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I use a coupon code?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you offer gift-vouchers?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I request a refund?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
          </section>

          <div className="d-flex mt-4 justify-content-center">
            <div className={`${css["icon-wrapper"]}`}>
              <Image src={misc} alt="Shopping" layout="responsive" />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <hr className={`${css.hr}`} />
            <h3 className="px-5">Miscellaneous Questions</h3>
            <hr className={`${css.hr}`} />
          </div>
          <section className="row">
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you ship worldwide?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I use a coupon code?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 mb-5">
              <h5 className="mb-4">Do you offer gift-vouchers?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
            <div className="col-md-6 col-lg-5 ms-auto mb-5">
              <h5 className="mb-4">How can I request a refund?</h5>
              <p>
                This is the third article of a three-part series. I&apos;m
                illustrating the marketing challenges of PrescottWeddings.com, a
                small business. If you don&apos;t remember anything else about
                marketing, remember this: Frequency is king.
              </p>
            </div>
          </section>

          <h2 className="text-center">You Still Need Help?</h2>
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button className={`btn ${css.contact} py-3 px-5 shadow-none`}>Contact Us</button>
          </div>
        </div>
      </Main>
    </>
  );
}

export default FAQ;
