import axios from 'axios';
import { reviewSlice } from './reviewsSlice';

export const postReview = (payload) => async (dispatch) => {
    try{
        const post = await axios.post(`http://localhost:3001/api/reviews/`, payload)
        console.log('esto es /reviewActions/postReview PAYLOAD', payload)
        console.log('esto es /reviewActions/postReview POST', post)

        // return dispatch(reviewSlice(post))
    }catch(error){
        return error
    }
};

export const getPaypal = (token) => async (dispatch) => {
    try{
        const vaucher = await axios.get(`http://localhost:3001/api/paypal/execute-payment${token}`)
        console.log('esto es /reviewActions/postReview vaucher')
        console.log(token)
        console.log(vaucher)

        return
    }catch(error){
        return error
    }
};
