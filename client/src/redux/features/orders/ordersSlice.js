import { createSlice } from "@reduxjs/toolkit"

export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orders:[],
        orderDetails:{}
    },
    reducers: {
        getAllOrder:(state, action) => {
            state.orders = action.payload
        },
        getOrderDetail:(state, action) => {
            state.orderDetails = action.payload
        },
        clearOrderDetail:(state, action) => {
            state.orderDetails = action.payload
        },
    }
})

export const {
    getAllOrder,
    getOrderDetail,
    clearOrderDetail,
} = ordersSlice.actions

export default ordersSlice.reducer


