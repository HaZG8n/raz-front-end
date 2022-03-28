import { ACTION_STRING } from "../actions/actionString";
import { ActionType } from "redux-promise-middleware";

const initialState = {
  allProduct: [],
  res:[],
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};
const getAllProductReducer = (prevState = initialState, action) => {
  const { getallProduct } = ACTION_STRING;
  const { Pending, Fulfilled, Rejected } = ActionType;
  // membuat logic berdasarkan action
  switch (action.type) {
    // case authLogin + pending:
    case getallProduct.concat("_", Pending):
      return {
        ...prevState,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };

    // case authLogin + fulfilled:
    case getallProduct.concat("_", Fulfilled):
      const data = action.payload.data.data;
      const res= action.payload.data.total_page
      const initial3 = [];
        const newArr = new Array(res);
        for (let i = 0; i < newArr.length; i++) {
            
                initial3.push(1 + i);
            
        }
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        allProduct:data,
        res:initial3
      };

    // case authLogin + rejected:
    case getallProduct.concat("_", Rejected):
      const err = action.payload;
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err,
      };

    default:
      return prevState;
  }
};

export default getAllProductReducer;
