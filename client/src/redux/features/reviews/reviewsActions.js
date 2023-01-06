import axios from 'axios';
import { getReviewsProducts, reviewSlice } from './reviewsSlice';

export const postReview = (payload) => async (dispatch) => {
    try{
        const post = await axios.post(`/reviews/`, payload)
        console.log('esto es /reviewActions/postReview PAYLOAD', payload)
        console.log('esto es /reviewActions/postReview POST', post)
        return
        // return dispatch(reviewSlice(post))
    }catch(error){
        return error
    }
};

export const getPaypal = (token) => async (dispatch) => {
    try{
        const vaucher = await axios.get(`/paypal/execute-payment${token}`)
        console.log('esto es /reviewActions/postReview vaucher')
        console.log(token)
        console.log(vaucher)

        return
    }catch(error){
        return error
    }
};

export const getReviewProduct = (_id) => async (dispatch) => {
    try{
        const reviewsProduct = await axios.get(`/reviews/product/${_id}`)
        // console.log('Esto es getReviewProduct')
        // console.log(reviewsProduct)
        return dispatch(getReviewsProducts(reviewsProduct.data))
    }catch(error){
        return error
    }
};
