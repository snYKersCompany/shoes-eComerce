import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        product: [],
        productsLoaded: [],
        productDetail: {},
    },

    reducers: {
        getProducts: (state, action) => {
            state.product = action.payload
        },
        getProductsDetails: (state, action) => {
            state.productDetail = action.payload
        },
        // searchByName: (state, action) => {
        //     state.product = action.payload
        // }
        createProduct: (state, action) => {
            state.product = action.payload
        }
    },
    

})

export const { getProducts, getProductsDetails, createProduct } = productsSlice.actions

export default productsSlice.reducer


