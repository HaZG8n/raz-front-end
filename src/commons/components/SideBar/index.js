import { Component } from "react";

import css from "src/commons/styles/Sidebar.module.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 50,
    };
  }
  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.category}>
          <p>Categories</p>
          <ul>
            <li>
              Accessories
              <p>5</p>
            </li>
            <li>
              Clothing
              <p>7</p>
            </li>
            <li>
              Fashion
              <p>27</p>
            </li>
            <li>
              Furnitur
              <p>9</p>
            </li>
            <li>
              Shoes
              <p>8</p>
            </li>
            <li>
              Wallets
              <p>23</p>
            </li>
          </ul>
        </div>
        <div className={css.price}>
          <p>Price</p>
          <input type="range" className="form-range" id="customRange1"></input>
          <button className="btn btn-secondary">Filter</button>
        </div>
      </div>
    );
  }
}
