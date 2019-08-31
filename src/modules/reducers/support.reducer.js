const supportReducer = (state = [], action) => {
    if(action.type === '') {
        return [
            ...action.payload
        ]
    }

    return state;
}

export default supportReducer;
