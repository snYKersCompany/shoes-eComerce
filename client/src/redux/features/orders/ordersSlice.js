import { createSlice } from "@reduxjs/toolkit"

export const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        orders:[]
    },
    reducers: {
        getAllOrder:(state, action) => {
            state.orders = action.payload
        },
    }
})

export const {
    getAllOrder,
} = ordersSlice.actions

export default ordersSlice.reducer


