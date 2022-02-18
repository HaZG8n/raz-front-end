const initiaState = {
  cart: [],
};

const cartData = (state = initiaState, action) => {
  switch (action.type) {
    case "SET_CART_FULFILLED":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default cartData;
