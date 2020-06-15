
let initialState = {
    users: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_IMAGES":
            return {
                ...state,
                images: action.payload
            }
        case "GET_IMAGE":
            return {
                ...state,
                image: action.payload
            }
        case "ADD_IMAGE":
            return {
                ...state,
                images: action.payload
            }

        default:
            return state
    }
}