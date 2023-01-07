import { createSlice } from "@reduxjs/toolkit"

export const nodemailerSlice = createSlice({
    name: "nodemailer",
    initialState: {
        orders:[],
        users: [],
    },
    reducers: {
        successOrder:(state, action) => {
            state.orders = action.payload
        },
        userDeleted:(state, action) => {
            state.orderDetails = action.payload
        },
        userSuspended:(state, action) => {
            state.orderDetails = action.payload
        },
    }
})

export const {
    successOrder,
    userDeleted,
    userSuspended,
} = nodemailerSlice.actions

export default nodemailerSlice.reducer

