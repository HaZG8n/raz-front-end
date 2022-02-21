const initialState = {
  wishList: [],
};

const wishListData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_WISHLIST_FULFILLED":
      return {
        ...state,
        wishList: action.payload,
      };
    case "DEL_WISHLIST_FULFILLED":
      return {
        ...state.wishList,
        wishList: [],
      };
    default:
      return state;
  }
};

export default wishListData;
