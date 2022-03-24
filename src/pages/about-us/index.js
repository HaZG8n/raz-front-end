import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/contact.module.css";
import image from "src/assets/img/image.png";
import trevor from "src/assets/img/trevor.png";
import fahrul from "src/assets/img/fahrul.jpg";
import tri from "src/assets/img/tri.jpg";
import iqbal from "src/assets/img/iqbal.jpg";
import rahma from "src/assets/img/rahma.jpg";
import hazpi from "src/assets/img/hazpi.jpg";

function AboutUs() {
  return (
    <>
      <Layout title="About Us" />
      <Main>
        <Banner title="About Us" />
        <div className={`container mt-5 ${css.content}`}>
          <section className="row mb-5">
            <div className="col-md-8">
              <h2 className="mb-4">RAZ - Modern Furniture</h2>
              <p>
                Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce
                tempor, leo vel iaculis aliquet, dui turpis maximus tellus,
                commodo congue Nam fermentum, augue eget pulvinar ullamcorper,
                dui purus ornare nibh, eu congue ligula felis nec dia liquam
                mollis nibh eu
              </p>
              <ul>
                <li className="mt-5 mb-4">
                  Fusce risus ligula, semper et ultricies vitae
                </li>
                <li className="mb-5">
                  Vivamus eget ante id velit varius lacinia
                </li>
              </ul>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue molestie eu et velit.
                Praesent gravida magna eget interdum iaculis. Aliquam erat
                volutpat. Integer placerat ipsum quis malesuada vehicula.
                Vestibulum
              </p>
            </div>
            <div className="col-md-4">
              <div className="img-wrapper">
                <Image src={image} alt="img" layout="responsive" />
              </div>
            </div>
          </section>

          <h1 className="my-5 text-center">Why Should Choose Us?</h1>
          <section className="row text-center mb-5">
            <div className="col-md-4 my-5">
              <h5>Unique Design</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div className="col-md-4 my-5">
              <h5>Good Waranty Policy</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div className="col-md-4 my-5">
              <h5>Handcrafted Quality</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div className="col-md-4 mb-5">
              <h5>Dedicated Support</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div className="col-md-4 mb-5">
              <h5>Amazing Features</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
            <div className="col-md-4 mb-5">
              <h5>Easy Customized</h5>
              <p>
                Fusce risus ligula, semper et ultricies vitae, bibendum non
                nisl. Nunc in libero quis felis congue
              </p>
            </div>
          </section>

          <h1 className="text-center mb-5">Meet Our Team</h1>
          <section className="row mb-5">
            <div className="col-md-4">
              <div className={`mx-auto ${css["img-container"]}`}>
                <Image src={fahrul} alt="fahrul" width={250} height={300} objectFit="cover"/>
              </div>
              <p className="text-center fw-bold fs-5">Fahrul Muhammad</p>
              <p className={`text-center text-muted ${css.position}`}>
                Leader, Fullstack Developer
              </p>
            </div>
            <div className="col-md-4">
              <div className={`mx-auto ${css["img-container"]}`}>
                <Image src={tri} alt="tri" width={250} height={300} objectFit="cover"/>
              </div>
              <p className="text-center fw-bold fs-5">Tri Sumanzaya</p>
              <p className={`text-center text-muted ${css.position}`}>
                Backend Developer
              </p>
            </div>
            <div className="col-md-4">
              <div className={`mx-auto ${css["img-container"]}`}>
                <Image src={hazpi} alt="hazpi" width={250} height={300} objectFit="cover"/>
              </div>
              <p className="text-center fw-bold fs-5">Hazpi Nurafgan</p>
              <p className={`text-center text-muted ${css.position}`}>
                Frontend Developer
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <div className={`mx-auto ${css["img-container"]}`}>
                <Image src={rahma} alt="rahma" width={250} height={300} objectFit="cover"/>
              </div>
              <p className="text-center fw-bold fs-5">Rahmah Sya&apos;bani</p>
              <p className={`text-center text-muted ${css.position}`}>
                Frontend Developer
              </p>
            </div>
            <div className="col-md-6 mt-5">
              <div className={`mx-auto ${css["img-container"]}`}>
                <Image src={iqbal} alt="iqbal" width={250} height={300}/>
              </div>
              <p className="text-center fw-bold fs-5">Muhammad Iqbal Firdaus Mahendra</p>
              <p className={`text-center text-muted ${css.position}`}>
                Frontend Developer
              </p>
            </div>
          </section>
        </div>
        <section className={`container-fluid ${css.testimoni} py-3 px-5`}>
          <p className="text-center mx-5 mt-5">
            &quot;Gave 5 stars for excellent customer service. I have a couple
            of questions which they replied quickly to answer. If i could give
            multiple reasons for my rating it would also be for the design
            quality and customization to go along with the great service. The
            theme is excellent, keep up the great work. &quot;
          </p>
          <div className={`mx-auto mb-2 mt-5 ${css["img-testi"]}`}>
            <Image src={trevor} alt="trevor" className={`rounded-circle`} />
          </div>
          <p className={`fw-bold text-center ${css.name} mb-5`}>
            Trevor Rivera - California
          </p>
        </section>
      </Main>
    </>
  );
}

export default AboutUs;
