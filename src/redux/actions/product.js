import { addProduct } from "src/commons/module/product";

export const setCart = (product) => {
  return {
    type: "SET_CART_FULFILLED",
    payload: product,
  };
};

export const DelCart = () => {
  return {
    type: "DEL_CART_FULFILLED",
  };
};

export const setWishList = (product) => {
  return {
    type: "SET_WISHLIST_FULFILLED",
    payload: product,
  };
};

// export const addProductAction = (body, token) => {
//   return {
//     type: "SET_ADD_PRODUCT_FULFILLED",
//     payload: addProduct(body, token)
//     // payload: product,
//   }
// }