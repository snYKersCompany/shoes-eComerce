import axios from "axios";
import { getProducts, productsDetails, filterRating } from "./productsSlice";

export const getAllProducts = () => async (dispatch) => {
    try {
<<<<<<< HEAD
        const response = await axios("https://snykers.onrender.com/api/products");
        console.log("estoy en getAllProducts")
=======
        const response = await axios("http://localhost:3001/api/products/");
>>>>>>> dev
        return dispatch(getProducts(response.data.products));
    } catch (error) {
        return error;
    }
};

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("http://localhost:3001/api/products/" + _id);
    console.log("esto es action getProductDetail -- > ", products.data[0]);

    return dispatch(productsDetails(products.data[0]));
  } catch (error) {
    return error;
  }
};

export const createProduct = (payload) => async () => {
  try {
    const post = await axios.post(
      "http://localhost:3001/api/products/create",
      payload
    );
    return post;
  } catch (error) {
    return error;
  }
};

export const filterRatings = (rating) => async (dispatch) => {
  try {
    const filter = await axios(
      "http://localhost:3001/api/products?rating=" + rating
    );
    console.log(":::::::::::::::::::::::::::ESTO ES FILTER.DATA", filter.data);
    return dispatch(filterRating(filter.data[0]));
  } catch (error) {
    return error;
  }
};
