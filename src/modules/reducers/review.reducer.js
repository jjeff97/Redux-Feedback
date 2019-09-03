const reviewReducer = (state = [], action) => {

    if(action.type === "ADD_REVIEW") {
        return [
            ...action.payload
        ]
    }

    return state;
}

export default reviewReducer;