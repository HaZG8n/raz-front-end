import {  useEffect, useState } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { getAllProduct, getProduct } from "src/commons/module/product";
import { connect, useDispatch, useSelector } from "react-redux";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Sidebar from "src/commons/components/SideBar";
import Banner from "src/commons/components/Banner";
import CardProduct from "src/commons/components/Product";

import css from "src/commons/styles/product.module.css";
import LoadingComp from "src/commons/components/LoadingComp";
// import formatRupiah from "src/commons/module/helper/formatRupiah";
import { formatRupiah } from "src/helpers/index";
import { useRouter } from 'next/router'
import { getAllProductAction } from "src/redux/actions/product";

const ProductTest =()=>{
  let router=useRouter()
  const dispatch =useDispatch()
  const [isLoading,setIsLoading]= useState(true) 
  const [initial,setInitial]=useState([])
  const [product,setProduct]= useState([])
  const allProducts = useSelector((state)=>state.getAllProduct.allProduct)
  const totalpage = useSelector((state)=>state.getAllProduct.res)
  console.log(totalpage);
  
  let [param,setParam]= useState({
    search: "",
    sort: 'ASC',
    sortBy:"createdAt",
    per_page: '9',
    page: "1", 
  })
  console.log("plisss",param);
  const handlePagination=(val)=>{
    const data={
      search: param.search??"",
      sort: param.sort??'',
      per_page: "9",
      page: val, 
    }
    dispatch(getAllProductAction(data))
      .then ((res)=>{
        console.log(res)
        
      })
      .catch((err)=>console.log(err.message))
  }

  const handleSort =(e)=>{
    const data ={
      search: param.search??"",
      sortBy:e.target.value,
      sort: "DESC",
      per_page: "9",
      page: "1", 
    }
    dispatch(getAllProductAction(data))
    .then ((res)=>{
      console.log(res)
      
    })
    .catch((err)=>console.log(err.message))
  }

  const getProduct = () => {
    dispatch(getAllProductAction(param))
      .then ((res)=>{
        console.log(res)
        
      })
      .catch((err)=>console.log(err.message))
  }
  const formChange = (e) => {
    data = e.target.value;
    setParam({...param,sortBy:data});
    // const { router } = this.props;
    // let { query } = this.props.router;
    // router.push({
    //   pathname: "/product",
    //   query: {
    //     page: data.page,
    //     sortBy: e.target.value,
    //     sort: "DESC",
    //   },
    // });
    // this.getProduct();
  };
  useEffect(() => {
    getProduct()
  }, [router])
  


return (
  <Layout title="Product">
    {isLoading ? (
      <div className={css.main}>
        <Main>
          <Banner text="Find and buy the one you like" title="Let's Shopping" />
          <div className={css.wrapper}>
            <Sidebar />
            <div className={css.content}>
              <div className={css.head}>
                <p>Showing 1-16 of 39 Results</p>
                <div className="dropdown">
                  <select
                    name="filter"
                    onChange={(e)=>handleSort(e)}
                    // onChange={(e) => {
                    //   console.log("fff", e.target.value);
                    //   this.setState({ sortBy: e.target.value }, () => {
                    //     router.push({
                    //       pathname: "/product",
                    //       query: {
                    //         page: this.state.page,
                    //         sortBy: e.target.value,
                    //         sort: "DESC",
                    //       },
                    //     });
                    //     this.getProduct();
                    //   });
                    // }}
                  >
                    <option value="" disable="true" hidden className="filter" >
                      Sort By
                    </option>
                    <option value="createdAt">Latest Product</option>
                    <option value="price">Price</option>
                    <option value="stock">Stock</option>
                  </select>
                </div>
              </div>
              <div className={css.card}>
                {allProducts.length == 0
                  ? null
                  : allProducts.map((val) => {
                      return <CardProduct key={val.id} id={val.id} name={val.name} price={formatRupiah(val.price)}  />;
                    })}
              </div>
              <div className={css.paginasi}>
                <ul className="pagination pagination-lg mt-5">
                  {totalpage.length !==0 ? totalpage.map((val, idx) => {
                    return (
                      <li
                        key={idx}
                        className={param.page === "1" ? `page-item ${css.active}` : "page-item"}
                        aria-current="page"
                        onClick={() =>{
                          handlePagination(val)
                        }
                      }
                      >
                        <button className="btn btn-secondary">{val}</button>
                      </li>
                    );
                  }):null}
                </ul>
              </div>
            </div>
          </div>
        </Main>
      </div>
    ) : (
      <LoadingComp />
    )}
  </Layout>
)
}
export default ProductTest

