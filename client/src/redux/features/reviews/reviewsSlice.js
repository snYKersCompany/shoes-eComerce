import { createSlice } from "@reduxjs/toolkit";


export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        review: [],
        product: {},
    },
    reducers:{
        postReview: (state, action) => {
            state.review = action.payload;
            console.log('esto es action', action.payload)
            console.log('esto es review', state.review)
        },
        getReviewsProducts: (state, action) => {
            state.product = action.payload;
        }
    }
})

export const {
    postReview,
    getReviewsProducts,
} = reviewSlice.actions

export default reviewSlice.reducer