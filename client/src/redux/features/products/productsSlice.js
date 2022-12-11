import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetail: [],
    // guardar en el obj filter/order el objeto y su valor
    filters: {},
    orders: {},
    // productsLoaded: [],
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
    filterAdd: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    //para hacer
    clearFilter: (state, action) => {
      state.filters = {};
      // como usuario quiero eliminar un unico filtro y consevar los que ya tenia
    },
    searchByQuery: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {
  getProducts,
  productsDetails,
  createProducs,
  filterRating,
  filterAdd,
  searchByQuery,
} = productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
