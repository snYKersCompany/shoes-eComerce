import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // este es el único estado que llenamos en el home. 
    productsLoaded: [],
    productDetail: [], // esto se llena por el useSelector() de /Details.jsx
    orderBy:{},
    // productRating: [],
    productCategory: [],
  },
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    productsDetails: (state, action) => {
      state.productDetail = action.payload;
    },
    createProducts: (state, action) => {
      state.products = action.payload;
    },
    addOrder: (state, action) => {
      state.orderBy = {...state.orderBy,...action.payload};
    },
    cleanOrder: (state, action) => {
      state.orderBy = {};
    },
    filterRating: (state, action) => {
      state.products = action.payload //hay que cambiar el estado que se llena 'en paginated se llena solamente products'
      // console.log('esto es state.products', state.products)
    },
    searchByQuery: (state, action) => {
      state.products = action.payload
    },
    filterByCategory: (state, action) => {
      state.products = action.payload
    }
  },
});

export const { getProducts, productsDetails, createProducs, filterRating, searchByQuery, filterByCategory } =
  productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
