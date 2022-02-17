import styles from "src/commons/styles/Home.module.css"
import Main from 'src/commons/components/Main'
import Header from 'src/commons/components/Header'
import Footer from "src/commons/components/Footer"
import arrowDown from 'src/assets/svg/arrow-down.svg'
import Image from 'next/image'

import sofa from "src/assets/img/sofa.png"
import lamp from "src/assets/img/lamp.png"
import chair from "src/assets/img/chair-home.png"
import ceramic from "src/assets/img/ceramic.png"
import plate from "src/assets/img/plate.png"
import modernLamp from "src/assets/img/modern-lamp.png"

const Home = () => {
  return (
    // <Main>
    <>
      <section className={`${styles['bg-home']}`}>
        <Header />
        <h1 className={`${styles['furniture-text']}`} >Minimal Furniture Store</h1>
        <div className={`${styles['wrapper-description']}`}>
          <p className={`${styles['description-text']}`}>
            Donec nunc nunc,
            gravida vitae diam vel, varius interdum erat.
            Quisque a nunc vel diam auctor commodo.
            Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim
          </p>
        </div>
        <p className={`${styles['explore-text']}`}>Explore now</p>
        <div className={`${styles['arrow-down']}`}>
          <Image src={arrowDown} alt='avatar' />
        </div>
      </section>

      <section className="container-fluid">
        {/* satu */}
        <div className="row">
          <div className="col p-0">
            <Image src={sofa} alt='avatar' />
          </div>
          <div className="col">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="col">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col  p-0">
            <div className={`${styles['product-img']}`}>
              <Image src={lamp} alt='avatar' />
            </div>
          </div>
        </div>

        {/* dua */}
        <div className="row">
          <div className="col p-0">
            <Image src={chair} alt='avatar' />
          </div>
          <div className="col">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="col">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col  p-0">
            <div className={`${styles['product-img']}`}>
              <Image src={ceramic} alt='avatar' />
            </div>
          </div>
        </div>

        {/* tiga */}
        <div className="row">
          <div className="col p-0">
            <Image src={plate} alt='avatar' />
          </div>
          <div className="col">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" >
          <div className="col ">
            <p className={`${styles['product-text']}`}>Mid-Century 1929 Sofa with Pilow</p>
            <p className={`${styles['product-description-text']}`}>
              Donec nunc nunc, gravida vitae diam vel,
              varius interdum erat. Quisque a nunc vel diam auctor commodo.
              Curabitur blandit ultrices ex. Curabitur ut magna dignissim,
              dignissim neque et, placerat risus. Morbi dictum lectus quam
            </p>
            <div className="row">
              <div className="col-1">
                <div className={`${styles['wrapper-line']}`}>
                  <span className={`${styles['line']}`}></span>
                </div>
              </div>
              <div className="col">
                <div className={`${styles['wrapper-line']}`}>
                  <p className={`${styles['shop-now-text']}`}>SHOP NOW</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col p-0">
            <div className={`${styles['product-img']}`}>
              <Image src={modernLamp} alt='avatar' />
            </div>
          </div>
        </div>
      </section>

      {/* <div style={{ position: 'absolute', width: '100%', marginBlock: '-40px' }}> */}
      <div className={`${styles['footer']}`}>
        <Footer />
      </div>
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
  )
}

export default Home
