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
