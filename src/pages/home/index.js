import styles from "src/commons/styles/Home.module.css";
// import Main from "src/commons/components/Main";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import arrowDown from "src/assets/svg/arrow-down.svg";
import Image from "next/image";

import sofa from "src/assets/img/sofa.png";
import lamp from "src/assets/img/lamp.png";
import chair from "src/assets/img/chair-home.png";
import ceramic from "src/assets/img/ceramic.png";
import plate from "src/assets/img/plate.png";
import modernLamp from "src/assets/img/modern-lamp.png";
import Layout from "src/commons/components/Layout";

import BackToWork from "src/assets/img/back-to-work.png"
import Furniture from "src/assets/img/furniture.png"
import FurnitureOffice from "src/assets/img/furniture-office.png"
import WorkSpace from "src/assets/img/work-space.png"


const Home = () => {
  return (
    // <Main>
    <>
      <Layout title='Home'>
        <section className={`${styles["bg-home"]}`}>
          <Header />
          <h1 className={`${styles["furniture-text"]}`}>Minimal Furniture Store</h1>
          <div className={`${styles["wrapper-description"]}`}>
            <p className={`${styles["description-text"]}`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim</p>
          </div>
          <p className={`${styles["explore-text"]}`}>Explore now</p>
          <div className={`${styles["arrow-down"]}`}>
            <Image src={arrowDown} alt="avatar" />
          </div>
        </section>

        <section className="container-fluid">
          {/* satu */}
          <div className="row">
            <div className="col p-0">
              <Image src={sofa} alt="avatar" />
            </div>
            <div className="col">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col ">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col  p-0">
              <div className={`${styles["product-img"]}`}>
                <Image src={lamp} alt="avatar" />
              </div>
            </div>
          </div>

          {/* dua */}
          <div className="row">
            <div className="col p-0">
              <Image src={chair} alt="avatar" />
            </div>
            <div className="col">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col  p-0">
              <div className={`${styles["product-img"]}`}>
                <Image src={ceramic} alt="avatar" />
              </div>
            </div>
          </div>

          {/* tiga */}
          <div className="row">
            <div className="col p-0">
              <Image src={plate} alt="avatar" />
            </div>
            <div className="col">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col ">
              <p className={`${styles["product-text"]}`}>Mid-Century 1929 Sofa with Pilow</p>
              <p className={`${styles["product-description-text"]}`}>
                Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
              </p>
              <div className="row">
                <div className="col-1">
                  <div className={`${styles["wrapper-line"]}`}>
                    <span className={`${styles["line"]}`}></span>
                  </div>
                </div>
                <div className="col">
                  <div className={`${styles["wrapper-line"]}`}>
                    <p className={`${styles["shop-now-text"]}`}>SHOP NOW</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col p-0">
              <div className={`${styles["product-img"]}`}>
                <Image src={modernLamp} alt="avatar" />
              </div>
            </div>
          </div>
        </section>

        {/* <div style={{ position: 'absolute', width: '100%', marginBlock: '-40px' }}> */}


        <div className={`${styles["footer"]}`}>
          <section className={`${styles['box-ceo']}`}>
            <div className="container">
              <p className={`${styles['content-text']}`}>
                Gave 5 stars for excellent customer service.
                I had a couple of questions which they replied quickly to answer.
                If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service.
                The theme is excellent, keep up the great work.
              </p>
              <div className={`${styles['line-box']}`}>
                <span className={`${styles['line-content']}`}></span>
              </div>
              <p className={styles['ceo-text']}>Trevor Rivera - CEO IKEA</p>
              <div className="container">
                <div className={`row ${styles['logo-content']}`}>
                  <div className="col">
                    <Image src={BackToWork} alt='avatar' />
                  </div>
                  <div className="col">
                    <Image src={Furniture} alt='avatar' />
                  </div>
                  <div className="col">
                    <Image src={FurnitureOffice} alt='avatar' />
                  </div>
                  <div className="col">
                    <Image src={WorkSpace} alt='avatar' />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </Layout>

      {/* </div> */}

      {/* <section className="container-fluid">
        {Array.isArray(dataArr) && dataArr.length > 0 &&
          dataArr.map((data, idx) => (
            <>
              <div className="row" key={idx}>
                <div className="col p-0">
                  <Image src={productImgDefault} alt='avatar' />
                </div>
                <div className="col">
                  <p>Mid-Century 1929 Sofa with Pilow</p>
                </div>
              </div>
            </>
          ))
        }
      </section> */}

      {/* <div className="row" >
        <div className="col p-0">
          <Image src={productImgDefault} alt='avatar' />
        </div>
        <div className="col">
          <p>Mid-Century 1929 Sofa with Pilow</p>
        </div>
      </div>

      <div>
        <div className="row" >
          <div className="col p-0">
            <p>Mid-Century 1929 Sofa with Pilow</p>
          </div>
          <div className="col">
            <Image src={productImgDefault} alt='avatar' />
          </div>
        </div>
      </div> */}
    </>

    // {/* </Main> */ }
    // coba
  );
};

export default Home;