import { Component } from "react";

import css from "src/commons/styles/Sidebar.module.css";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
          <button className="btn btn-secondary mb-3">Filter</button>
        </div>
        <div className={css.brands}>
          <p>Brands</p>
          <div className="form-check mb-2 ">
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label">IKEA</label>
          </div>
          <div className="form-check mb-2 ">
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label">My Royal</label>
          </div>
          <div className="form-check mb-2 ">
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label">Sweet House</label>
          </div>
          <div className="form-check mb-2 ">
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label">North Oxford</label>
          </div>
          <div className="form-check mb-2 ">
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label">Mr.Poppin 1929</label>
          </div>
        </div>
        <div className={css.colors}>
          <p>Colors</p>
          <div className={css.radio}>
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" /> <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />{" "}
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" /> <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />{" "}
            <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" /> <input className={`form-check-input ${css.input}`} type="checkbox" value="" id="defaultCheck1" />
          </div>
        </div>
      </div>
    );
  }
}
