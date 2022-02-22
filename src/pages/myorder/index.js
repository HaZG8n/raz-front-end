import { Component } from "react";
import { withRouter } from "next/router";
import css from "src/commons/styles/myOrder.module.css";
import { connect } from "react-redux";
import { getOrder } from "src/commons/module/product";

import Main from "src/commons/components/Main";
import Layout from "src/commons/components/Layout";
import MenuProfile from "src/commons/components/MenuProfile";
import Banner from "src/commons/components/Banner/index";
import CardOrderUser from "src/commons/components/OrderUser";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: [],
    };
  }
  async componentDidMount() {
    try {
      const token = this.props.token;
      const result = await getOrder(token);
      console.log("RESULT", result);
      this.setState({ order: result.data.data });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.state.order);
    return (
      <>
        <Layout title="My Order" />
        <Main>
          <Banner text="See your notifications for the latest updates" title="My Order" />
          <MenuProfile />
          <div className={css.table}>
            <p>PRODUCT</p>
            <p>PRICE</p>
            <p>QUANTITY</p>
            <p>STATUS ORDER</p>
            <p>STATUS SHIPING</p>
            <p>ORDER ID</p>
            <p>TOTAL</p>
          </div>
          {this.state.order.map((val) => {
            return <CardOrderUser shiping={val.shipping_status} price={val.product[0].price} status={val.status_order} orderId={val.order_id} quantity={val.quantity} total={val.total_price} name={val.product[0].name} key={val.id} />;
          })}
          <button
            onClick={() => {
              this.props.router.push("/order/track");
            }}
            className="btn btn-secondary"
          >
            Track Your Order
          </button>
        </Main>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default withRouter(connect(mapStateToProps)(index));
