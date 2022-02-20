const initiaState = {
  price: 0,
};

const cartTotalPrice = (state = initiaState, action) => {
  switch (action.type) {
    case "SET_TOTAL_FULFILLED":
      return {
        ...state,
        price: action.payload,
      };

    default:
      return state;
  }
};

export default cartTotalPrice;
