import Image from "next/image";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/AddProduct.module.css";
import product from "src/assets/svg/add-product.svg";
import MenuProfile from "src/commons/components/MenuProfile";

import { addProductAction } from "src/redux/actions/product";
import { useSelector, useDispatch } from "react-redux";
import { useState, createRef, Fragment } from "react";

function AddProduct() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const inputImage = createRef()
  const [imagesFile, setImagesFile] = useState([])

  const { token } = state.auth

  const handleAddProduct = (e) => {
    e.preventDefault()
    const body = {
      name: e.target.name.value,
      description: e.target.description.value,
      brand: e.target.brand.value,
      category: Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value).join(''),
      color: Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value).join(''),
      price: e.target.price.value,
      condition: Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value).join(''),
      image: imagesFile
    }
    dispatch(addProductAction(body, token))
  }

  const handleImage = (e) => {
    if (e.target.files) {
      const fileArr = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      )
      setImagesFile((prevImage) => prevImage.concat(fileArr))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }

  console.log(imagesFile.length)

  const clickImage = () => {
    inputImage.current.click()
  }

  return (
    <>
      <Layout title="Add Product" />
      <Main>
        <Banner
          title="Selling Product"
          text="See your notifications for the latest updates"
        />
        <MenuProfile />
        <div className={`${css.main} mt-5`}>
          <form className={`${css.form}`} onSubmit={handleAddProduct}>
            <section className="details">
              <h4 className="mb-4">Item Details</h4>
              <input
                type="text"
                placeholder="Name of goods *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
                name="name"
                id="name"
              />
              <textarea
                placeholder="Description Product *"
                className="mb-4 ps-4 pb-5 pt-4 form-control shadow-none"
                id="description"
                name="description"
              />
              <div className="input-group mt-3 mb-4">
                <select
                  id="brand"
                  name="brand"
                  className={`form-select py-4 ps-4 shadow-none ${css["select-brands"]}`}
                >
                  <option value="" disable="true" hidden>Brands *</option>
                  <option value="Ikea">IKEA</option>
                  <option value="My Royal">My Royal</option>
                  <option value="Sweet House">Sweet House</option>
                  <option value="North Oxford">North Oxford</option>
                  <option value="Poppin">Mr.Poppin 1929</option>
                </select>
              </div>

              <div className="d-flex justify-content-between">
                <div className="form-check mb-2">
                  <input className={`form-check-input ${css.checkbox} shadow-none`} type="radio" value="" />
                  <label className="form-check-label ps-2 lh-lg">
                    Accessories
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Accessories"
                    id="category"
                    name="category"
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Clothing
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Clothing"
                    id="category"
                    name="category"
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Fashion
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Fashion"
                    id="category"
                    name="category"
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Furnitur
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Shoes"
                    id="category"
                    name="category"
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Shoes
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Wallets"
                    id="category"
                    name="category"
                  />
                  <label className="form-check-label ps-2 lh-lg">
                    Wallets
                  </label>
                </div>
              </div>

              <div className={`d-flex mt-3 mb-5 justify-content-between ${css.colors}`}>
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="Luxor Gold"
                  name="color"
                  id="color"
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="Ship Cove"
                  name="color"
                  id="color"
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="Armadillo"
                  name="color"
                  id="color"
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="East Bay"
                  name="color"
                  id="color"
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="Hippie Green"
                  name="color"
                  id="color"
                />
                <input
                  className={`form-check-input shadow-none ${css.input}`}
                  type="checkbox"
                  value="Fuel Yellow"
                  name="color"
                  id="color"
                />
              </div>
            </section>

            <section className="inventory mt-4">
              <h4 className="mb-4">Inventory</h4>
              <input
                type="number"
                placeholder="Unit price *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
                id="price"
                name="price"
              />
              <input
                type="number"
                placeholder="Unit Stock *"
                className="mb-4 ps-4 py-4 form-control shadow-none"
                id="stock"
                name="stock"
              />
              <p>Stock Condition</p>
              <div className="d-flex">
                <div className="form-check mb-2 me-5">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="New"
                    id="condition"
                    name="condition"
                  />
                  <label className="form-check-label ps-2 lh-lg text-muted">
                    New Product
                  </label>
                </div>
                <div className="form-check mb-2 me-5">
                  <input
                    className={`form-check-input ${css.checkbox} shadow-none`}
                    type="checkbox"
                    value="Secound"
                    id="condition"
                    name="condition"
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
                <input type='file' id='image' multiple hidden ref={inputImage} onChange={handleImage} />
                <Image src={product} alt="product" onClick={clickImage} />
              </div>
            </section>

            <div className='container'>
              <div className="row">
                {imagesFile !== [] && imagesFile.length > 0 &&
                  imagesFile.map((data, idx) => (
                    <>
                      <div className="col-sm" key={idx}>
                        <Image src={data} alt="avatar" width={93} height={83} />
                      </div>
                    </>
                  ))
                }
              </div>
            </div>

            <button type="submit" className={`btn shadow-none mb-5 py-3 ${css["btn-sell"]}`}>
              Sell Product
            </button>
          </form>
        </div>
      </Main>
    </>
  );
}

export default AddProduct;