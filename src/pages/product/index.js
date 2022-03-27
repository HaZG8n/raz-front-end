import { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { getAllProduct, getProduct } from "src/commons/module/product";
import { connect } from "react-redux";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import Sidebar from "src/commons/components/SideBar";
import Banner from "src/commons/components/Banner";
import CardProduct from "src/commons/components/Product";

import css from "src/commons/styles/product.module.css";
import LoadingComp from "src/commons/components/LoadingComp";
// import formatRupiah from "src/commons/module/helper/formatRupiah";
import { formatRupiah } from "src/helpers/index";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      data: [],
      page: 1,
      sortBy: "createdAt",
      sort: "",
      search: this.props.search,
      isLoading: false,
    };
  }

  getProduct = () => {
    const { router } = this.props;
    this.setState({ isLoading: true });
    const page = router.query.page ? router.query.page : this.state.page;
    const sortBy = this.state.sortBy ?? router.query.sortBy;
    const param = {
      page,
      sortBy,
      search: this.state.search,
    };
    getAllProduct(param)
      .then((res) => {
        this.setState({ data: res.data });
        this.setState({ product: res.data.data });
        this.setState({ isLoading: false });
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
    router.push({
      pathname: "/product",
      query: {
        page: data.page,
        sortBy: e.target.value,
        sort: "DESC",
      },
    });
    this.getProduct();
  };

  componentDidMount() {
    this.getProduct();
  }

  render() {
    const { router } = this.props;
    console.log("DATA", this.state.page);
    const initial = [];
    const newArr = new Array(this.state.data.total_page);
    for (let i = 0; i < newArr.length; i++) {
      initial.push(1 + i);
    }
    return (
      <Layout title="Product">
        {!this.state.isLoading ? (
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
                          console.log("fff", e.target.value);
                          this.setState({ sortBy: e.target.value }, () => {
                            router.push({
                              pathname: "/product",
                              query: {
                                page: this.state.page,
                                sortBy: e.target.value,
                                sort: "DESC",
                              },
                            });
                            this.getProduct();
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
                          return <CardProduct key={val.id} id={val.id} name={val.name} price={formatRupiah(val.price)} />;
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
                                this.getProduct();
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
        ) : (
          <LoadingComp />
        )}
      </Layout>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    search: state.search.search,
  };
};

export default withRouter(connect(mapStateToProps)(index));
