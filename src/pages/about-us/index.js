import Image from "next/image";

import Layout from "src/commons/components/Layout";
import Main from "src/commons/components/Main";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/contact.module.css";
import image from "src/assets/img/image.png";

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
          <div className="row text-center mb-5">
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
            <h1 className="text-center">Meet Our Team</h1>
          </div>
        </div>
      </Main>
    </>
  );
}

export default AboutUs;
