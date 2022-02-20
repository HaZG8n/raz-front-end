const initialState = {
    addProductData: {},
}

const addProductReducers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ADD_PRODUCT_FULFILLED":
            return {
                ...state,
                addProductData: action.payload,
            }
        default: return state
    }
}

export default addProductReducers