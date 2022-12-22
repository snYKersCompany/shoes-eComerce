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