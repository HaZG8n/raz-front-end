import Image from "next/image";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/AddProduct.module.css";
import product from "src/assets/svg/add-product.svg";

function AddProduct() {
  return (
    <>
      <Layout title="Add Product" />
      <Main>
        <Banner
          title="Selling Product"
          text="See your notifications for the latest updates"
        />
        <div className={`${css.main} mt-5`}>
          <form className={`${css.form}`}>
            <section className="details">
              <h4 className="mb-4">Item Details</h4>
              <input
                type="text"
                placeholder="Name of goods *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
              />
              <textarea
                placeholder="Description Product *"
                className="mb-4 ps-4 pb-5 pt-4 form-control shadow-none"
              />
              <div className="input-group mt-3 mb-4">
                <select
                  id="brands"
                  name="brands"
                  className={`form-select py-4 ps-4 shadow-none ${css["select-brands"]}`}
                >
                  <option value="" disable="true" hidden>
                    Brands *
                  </option>
                  <option value="ikea">IKEA</option>
                  <option value="my-royal">My Royal</option>
                  <option value="sweet-house">Sweet House</option>
                  <option value="north-oxford">North Oxford</option>
                  <option value="poppin">Mr.Poppin 1929</option>
                </select>
              </div>
              <div className="d-flex justify-content-between">
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="radio"
                    name="category"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Category
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="radio"
                    name="category"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Category
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="radio"
                    name="category"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Category
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="radio"
                    name="category"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Category
                  </label>
                </div>
              </div>
              <div
                className={`d-flex mt-3 mb-5 justify-content-between ${css.colors}`}
              >
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="radio"
                  name="color"
                  value=""
                />
              </div>
            </section>

            <section className="inventory mt-4">
              <h4 className="mb-4">Inventory</h4>
              <input
                type="text"
                placeholder="Unit price *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
              />
              <input
                type="text"
                placeholder="Unit Stock *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
              />
              <p>Stock Condition</p>
              <div className="d-flex">
                <div className="form-check mb-2 me-5">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg text-muted">
                    New Product
                  </label>
                </div>
                <div className="form-check mb-2 me-5">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label ps-2 lh-lg text-muted">
                    Second Product
                  </label>
                </div>
              </div>
            </section>

            <section className="img-product my-5">
              <h4>Photo of Goods</h4>
              <div className={`${css["img-wrapper"]} mt-5`}>
                <Image src={product} alt="product" />
              </div>
            </section>
            <button className={`btn shadow-none mb-5 py-3 ${css["btn-sell"]}`}>
              Sell Product
            </button>
          </form>
        </div>
      </Main>
    </>
  );
}

export default AddProduct;
