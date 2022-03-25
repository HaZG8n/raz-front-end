import Image from "next/image";
import { useRouter } from 'next/router'

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Banner from "src/commons/components/Banner";
import css from "src/commons/styles/AddProduct.module.css";
import product from "src/assets/svg/add-product.svg";
import MenuProfile from "src/commons/components/MenuProfile";
import FormData from "form-data";

// import { addProductAction } from "src/redux/actions/product";
import { addProduct } from "src/commons/module/product";
import { useSelector, useDispatch } from "react-redux";
import { useState, createRef } from "react";
import { images } from "next.config";
import Swal from "sweetalert2";

function AddProduct() {
  const router = useRouter()
  const state = useSelector((state) => state);
  const inputImage = createRef();
  const [imagesFile, setImagesFile] = useState([]);
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [colors, setColors] = useState("");
  const [brand, setBrand] = useState("");
  const [condition, setCondition] = useState("");
  const [stock, setStock] = useState(0);


  const { token } = state.auth;

  const handleName = (e) => {
    const Name = e.target.value;
    setName(Name);
    console.log(name);
  };
  const handleCondition = (e) => {
    const Name = e.target.value;
    setCondition(Name);
  };
  const handleStock = (e) => {
    const Name = e.target.value;
    setStock(Name);
  };
  const handleDesc = (e) => {
    const Desc = e.target.value;
    setDesc(Desc);
  };
  const handlePrice = (e) => {
    const Price = e.target.value;
    setPrice(Price);
  };
  const handleCategory = (e) => {
    const Name = e.target.value;
    setCategory(Name);
  };
  const handleBrand = (e) => {
    const Name = e.target.value;
    setBrand(Name);
  };
  const handleColors = (e) => {
    const Name = e.target.value;
    setColors(Name);
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success ',
      cancelButton: 'btn btn-danger range-right'
    },
    buttonsStyling: false
  })

  const _setData = async () => {
    const form = new FormData();
    form.append("name", name);
    form.append("description", desc);
    form.append("price", parseInt(price));
    form.append("category", category);
    form.append("color", colors);
    form.append("brand", brand);
    form.append("condition", condition);
    form.append("stock", parseInt(stock));
    images.map((val) => form.append("image[]", val));
    try {
      const result = await addProduct(form, token);
      console.log(result);
      if (result.data.statusCode === 200) {
        swalWithBootstrapButtons.fire(
          {
            tittle: 'Success',
            text: `${result.data.status}`,
            icon: 'success',
          }
        )
        setTimeout(() => {
          router.push('/product/list')
        }, 3000)
      }
    } catch (error) {
      console.log({ ...error });
    }
  };

  const handleImage = (e) => {
    const testing = Array.from(e.target.files);
    setImages((prevImage) => prevImage.concat(testing));
    console.log("test array", images);
    if (e.target.files) {
      const fileArr = Array.from(e.target.files).map((file) => URL.createObjectURL(file));
      setImagesFile((prevImage) => prevImage.concat(fileArr));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  };

  const deleteImg = (index) => {
    let arr = [...imagesFile]
    arr.splice(index, 1)
    setImagesFile(arr)
    let arrImg = [...images]
    arrImg.splice(index, 1)
    setImages(arrImg)
  }

  const clickImage = () => {
    inputImage.current.click();
  };

  console.log('jumlah yang dikirim', images.length, 'jumlah yang ditampilkan', imagesFile.length)

  return (
    <>
      <Layout title="Add Product" />
      <Main>
        <Banner title="Selling Product" text="See your notifications for the latest updates" />
        <MenuProfile />
        <div className={`${css.main} mt-5`}>
          <section className="details">
            <h4 className="mb-4">Item Details</h4>
            <input type="text" placeholder="Name of goods *" onChange={(e) => handleName(e)} className="mb-4 ps-4 py-4 form-control shadow-none" name="name" id="name" />
            <textarea placeholder="Description Product *" onChange={(e) => handleDesc(e)} className="mb-4 ps-4 pb-5 pt-4 form-control shadow-none" id="description" name="description" />
            <div className="input-group mt-3 mb-4">
              <select id="brand" name="brand" onChange={(e) => handleBrand(e)} className={`form-select py-4 ps-4 shadow-none ${css["select-brands"]}`}>
                <option value="" disable="true" hidden>
                  Brands *
                </option>
                <option value="Ikea">IKEA</option>
                <option value="My Royal">My Royal</option>
                <option value="Sweet House">Sweet House</option>
                <option value="North Oxford">North Oxford</option>
                <option value="Poppin">Mr.Poppin 1929</option>
              </select>
            </div>

            <div className="d-flex justify-content-between">
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" name="category" value="category" id="category" />
                <label className="form-check-label ps-2 lh-lg">Accessories</label>
              </div>
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" value="Accessories" id="category" name="category" />
                <label className="form-check-label ps-2 lh-lg">Clothing</label>
              </div>
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" value="Clothing" id="category" name="category" />
                <label className="form-check-label ps-2 lh-lg">Fashion</label>
              </div>
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" value="Fashion" id="category" name="category" />
                <label className="form-check-label ps-2 lh-lg">Furnitur</label>
              </div>
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" value="Shoes" id="category" name="category" />
                <label className="form-check-label ps-2 lh-lg">Shoes</label>
              </div>
              <div className="form-check mb-2">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCategory(e)} type="radio" value="Wallets" id="category" name="category" />
                <label className="form-check-label ps-2 lh-lg">Wallets</label>
              </div>
            </div>

            <div className={`d-flex mt-3 mb-5 justify-content-between ${css.colors}`}>
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="Luxor Gold" name="color" id="color" />
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="Ship Cove" name="color" id="color" />
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="Armadillo" name="color" id="color" />
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="East Bay" name="color" id="color" />
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="Hippie Green" name="color" id="color" />
              <input className={`form-check-input shadow-none ${css.input}`} onChange={(e) => handleColors(e)} type="radio" value="Fuel Yellow" name="color" id="color" />
            </div>
          </section>

          <section className="inventory mt-4">
            <h4 className="mb-4">Inventory</h4>
            <input type="number" placeholder="Unit price *" onChange={(e) => handlePrice(e)} className="mb-4 ps-4 py-4 form-control shadow-none" id="price" name="price" />
            <input type="number" placeholder="Unit Stock *" onChange={(e) => handleStock(e)} className="mb-4 ps-4 py-4 form-control shadow-none" id="stock" name="stock" />
            <p>Stock Condition</p>
            <div className="d-flex">
              <div className="form-check mb-2 me-5">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCondition(e)} type="radio" value="New" id="condition" name="condition" />
                <label className="form-check-label ps-2 lh-lg text-muted">New Product</label>
              </div>
              <div className="form-check mb-2 me-5">
                <input className={`form-check-input ${css.checkbox} shadow-none`} onChange={(e) => handleCondition(e)} type="radio" value="Secound" id="condition" name="condition" />
                <label className="form-check-label ps-2 lh-lg text-muted">Second Product</label>
              </div>
            </div>
          </section>


          <section >
            <h4>Photo of Goods</h4>
            <div className={`${css['img-flex']} mt-5`}>
              {imagesFile !== [] &&
                imagesFile.length > 0 &&
                imagesFile.map((data, idx) => (
                  <>
                    <div className={`mt-5 w-1`} style={{ marginRight: 50 }} key={idx}>
                      <Image src={data} alt="avatar" width={200} height={200} onClick={(e) => { e.preventDefault(); deleteImg(idx) }} />
                    </div>
                  </>
                ))}
              <div className={`${css["img-wrapper"]} mt-5 mb-5`}>
                <input type="file" id="image" multiple hidden ref={inputImage} onChange={(e) => handleImage(e)} />
                <Image src={product} alt="product" onClick={clickImage} />
              </div>
            </div>
          </section>

          {/* <section>
            <h4>Photo of Goods</h4>
            <div className="container bg-danger">
              <div className="row">
                {imagesFile !== [] &&
                  imagesFile.length > 0 &&
                  imagesFile.map((data, idx) => (
                    <>
                      <div className={`bg-success col-sm mt-5 w-1 ${css['img-wrapper']}`} key={idx}>
                        <Image src={data} alt="avatar" width={200} height={200} onClick={() => { }} />
                      </div>
                    </>
                  ))}
                <div className={`${css["img-wrapper"]} col-sm  mt-5`}>
                  <input type="file" id="image" multiple hidden ref={inputImage} onChange={(e) => handleImage(e)} />
                  <Image src={product} alt="product" onClick={clickImage} />
                </div>
              </div>
            </div>
          </section> */}



          <button type="submit" onClick={_setData} className={`btn shadow-none mb-5 py-3 ${css["btn-sell"]}`}>
            Sell Product
          </button>
        </div>
      </Main>
    </>
  );
}

export default AddProduct;
