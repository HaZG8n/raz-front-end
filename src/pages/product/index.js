import { Component } from "react";
import { withRouter } from "next/router";
import Link from "next/link";
import { getAllProduct } from "src/commons/module/product";

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
    };
  }

  getAll = () => {
    getAllProduct()
      .then((res) => {
        console.log(res.data.data);
        this.setState({ product: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAll();
  }

  render() {
    const { router } = this.props;
    console.log("ROUTER", router.query);
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
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort By
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <a className="dropdown-item" href="#">
                          Latest product
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          More Expensive
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          More Cheap
                        </a>
                      </li>
                    </ul>
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
                    <li className={router.query.page == "1" ? `page-item ${css.active}` : "page-item"} aria-current="page">
                      <Link className="page-link" href="/product?page=1">
                        01
                      </Link>
                    </li>
                    <li className={router.query.page == "2" ? `page-item ${css.active}` : "page-item"}>
                      <Link className="page-link" href="/product?page=2">
                        02
                      </Link>
                    </li>
                    <li className={router.query.page == "3" ? `page-item ${css.active}` : "page-item"}>
                      <Link className="page-link" href="/product?page=3">
                        03
                      </Link>
                    </li>
                    <li className={router.query.page == "4" ? `page-item ${css.active}` : "page-item"}>
                      <Link className="page-link" href="/product?page=4">
                        04
                      </Link>
                    </li>
                    <li className={router.query.page == "5" ? `page-item ${css.active}` : "page-item"}>
                      <Link className="page-link" href="/product?page=5">
                        05
                      </Link>
                    </li>
                    <li className={router.query.page == "6" ? `page-item ${css.active}` : "page-item"}>
                      <Link className="page-link" href="/product?page=6">
                        06
                      </Link>
                    </li>
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
