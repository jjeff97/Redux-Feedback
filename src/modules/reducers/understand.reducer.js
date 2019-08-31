const understandReducer = (state = [], action) => {
    if(action.type === '') {
        return [
            ...action.payload
        ]
    }

    return state;
}

export default understandReducer;
