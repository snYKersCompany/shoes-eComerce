import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productsLoaded: [],
    productDetail: [],
    productRating: [],
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
    filterRating: (state, action) => {
      const rating2 = state.products;
      console.log("::::::::::::::::::::::: ESTO ES RATING2", rating2);
      const filterByRating =
        action.payload === "all"
          ? rating2
          : rating2.filter((product) => product.rating);
      console.log(
        "::::::::::::::::::::::ESTO ES FILTERBYRATING",
        filterByRating
      );
      return {
        ...state,
        products: action.payload === "all" ? state.products : filterByRating,
      };
    },
  },
});

export const { getProducts, productsDetails, createProducs, filterRating } =
  productsSlice.actions;

export default productsSlice.reducer;

// const store = {
//   products: {
//     products: [],
//     productsLoaded: [],
//     productDetail: [],
//   }
// }
