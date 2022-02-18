export const setCart = (product) => {
  return {
    type: "SET_CART_FULFILLED",
    payload: product,
  };
};
