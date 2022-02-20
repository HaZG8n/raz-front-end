import { ActionType } from "redux-promise-middleware"

const initialState = {
    data: []
}

const myProductReducer = (state = initialState, action) => {
    const { Fulfilled } = ActionType
    switch (action.type) {
        case "SET_MY_PRODUCT_FULFILLED".concat('_', Fulfilled):
            const dataProduct = action.payload.data
            return {
                ...state,
                data: dataProduct.data
            }
        default: return state
    }
}

export default myProductReducer