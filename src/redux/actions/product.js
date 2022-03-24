// import { getMyProduct } from "src/commons/module/product";

export const setCart = (product) => {
  return {
    type: "SET_CART_FULFILLED",
    payload: product,
  };
};
export const setsearch = (search) => {
  return {
    type: "SET_SEARCH_FULFILLED",
    payload: search,
  };
};

export const DelCart = () => {
  return {
    type: "DEL_CART_FULFILLED",
  };
};
export const deletWishList = () => {
  return {
    type: "DEL_WISHLIST_FULFILLED",
  };
};

export const setTotalPrice = (price) => {
  return {
    type: "SET_TOTAL_FULFILLED",
    payload: price,
  };
};

export const setWishList = (product) => {
  return {
    type: "SET_WISHLIST_FULFILLED",
    payload: product,
  };
};

// export const myProductAction = (token) => {
//   return {
//     type: "SET_MY_PRODUCT_FULFILLED",
//     payload: getMyProduct(token)
//   }
// }
// export const addProductAction = (body, token) => {
//   return {
//     type: "SET_ADD_PRODUCT_FULFILLED",
//     payload: addProduct(body, token)
//     // payload: product,
//   }
// }
