import { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { getAllProduct, getProduct } from "src/commons/module/product";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Sidebar from "src/commons/components/SideBar";
import Banner from "src/commons/components/Banner";
import CardProduct from "src/commons/components/Product";

import css from "src/commons/styles/product.module.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      data: [],
      page: 1,
      filter: "",
      sort: "",
    };
  }

  getAll = () => {
    const page = this.state.page;
    console.log("DIPANGGIL");
    getAllProduct(page)
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
        this.setState({ product: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProduct = () => {
    const { router } = this.props;
    let page = router.query.page ? router.query.page : this.state.page;
    let filter = router.query.filter ? router.query.filter : "id";
    let sort = router.query.sort ? router.query.sort : "ASC";
    console.log("FILTER", filter);
    getProduct(filter, sort, page)
      .then((res) => {
        console.log("GET", res.data);
        this.setState({ data: res.data });
        this.setState({ product: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  formChange = (e) => {
    const data = { ...this.state };
    data[e.target.name] = e.target.value;
    this.setState(data);
    const { router } = this.props;
    let { query } = this.props.router;
    console.log("QUERY FORM CHANGE", query);
    router.push({
      pathname: "/product",
      query: {
        page: data.page,
        filter: e.target.value,
        sort: "DESC",
      },
    });
    this.getProduct();
  };

  componentDidMount() {
    this.getAll();
    this.getProduct();
    console.log("RE RENDER");
  }

  render() {
    const { router } = this.props;
    console.log("DATA", this.state.data);
    const initial = [];
    const newArr = new Array(this.state.data.total_page);
    for (let i = 0; i < newArr.length; i++) {
      initial.push(1 + i);
    }
    return (
      <Layout title="Product">
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
                      onChange={(e) => {
                        if (e.target.value !== this.state.filter) {
                          this.getProduct();
                        }
                        this.setState({ filter: e.target.value }, () => {
                          router.push({
                            pathname: "/product",
                            query: {
                              page: this.state.page,
                              filter: e.target.value,
                              sort: "DESC",
                            },
                          });
                          getProduct();
                        });
                      }}
                    >
                      <option value="" disable="true" hidden className="filter">
                        Sort By
                      </option>
                      <option value="createdAt">Latest Product</option>
                      <option value="price">Price</option>
                      <option value="stock">Stock</option>
                    </select>
                  </div>
                </div>
                <div className={css.card}>
                  {this.state.product.length == 0
                    ? null
                    : this.state.product.map((val) => {
                        return <CardProduct key={val.id} id={val.id} name={val.name} price={val.price} />;
                      })}
                </div>
                <div className={css.paginasi}>
                  <ul className="pagination pagination-lg mt-5">
                    {initial.map((val, idx) => {
                      return (
                        <li
                          key={idx}
                          className={router.query.page == "1" ? `page-item ${css.active}` : "page-item"}
                          aria-current="page"
                          onClick={() =>
                            this.setState({ page: val }, () => {
                              this.getAll();
                            })
                          }
                        >
                          <button className="btn btn-secondary">{val}</button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </Main>
        </div>
      </Layout>
    );
  }
}

export default withRouter(index);
