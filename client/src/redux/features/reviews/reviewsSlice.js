import { createSlice } from "@reduxjs/toolkit";


export const reviewSlice = createSlice({
    name: 'reviews',
    initialState: {
        review: []
    },
    reducers:{
        postReview: (state, action) => {
            state.review = action.payload;
            console.log('esto es action', action.payload)
            console.log('esto es review', state.review)
        }
    }
})

export const {
    postReview,
} = reviewSlice.actions

export default reviewSlice.reducer