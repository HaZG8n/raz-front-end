const initialState = {
    data: {}
}

const myProduct = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MYPRODUCT_FULFILLED":
            console.log("cek")
            return {
                ...state,
                data: action.payload
            }
        default: return state
    }
}

export default myProduct