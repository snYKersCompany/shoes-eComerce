import { createSlice } from "@reduxjs/toolkit";
import { create } from "domain";

export const paypalSlice = createSlice({
    name: "paypal",
    initialState: {
        orders: [],
        detailOrder: {}
    },
    reducers: {
        createOrder: (state, action) => {
            state.detailOrder = action.payload
        }
    }
})

export const {
    createOrder
} = paypalSlice.actions

export default paypalSlice.reducer
