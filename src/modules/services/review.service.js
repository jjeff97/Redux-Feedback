import axios from 'axios';

const getReview= () => {
    return axios({
        method: 'GET',
        url: '/review'
    })
}

export {
    getReview
}