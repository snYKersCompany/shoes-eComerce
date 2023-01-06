import axios from "axios";
import { getReviewsProducts, reviewSlice } from "./reviewsSlice"; // eslint-disable-line

export const postReview = (payload) => async (dispatch) => {
  try {
    const post = await axios.post(`/reviews/`, payload); // eslint-disable-line
    return;
    // return dispatch(reviewSlice(post))
  } catch (error) {
    return error;
  }
};

export const getPaypal = (token) => async (dispatch) => {
  try {
    const vaucher = await axios.get(`/paypal/execute-payment${token}`); // eslint-disable-line
    return;
  } catch (error) {
    return error;
  }
};
export const getPaypal = (token) => async (dispatch) => {
    try{
        const vaucher = await axios.get(`/paypal/execute-payment${token}`)
        console.log('esto es /reviewActions/postReview vaucher')
        console.log(token)
        console.log(vaucher)

export const getReviewProduct = (_id) => async (dispatch) => {
  try {
    const reviewsProduct = await axios.get(`/reviews/product/${_id}`);
    return dispatch(getReviewsProducts(reviewsProduct));
  } catch (error) {
    return error;
  }
};