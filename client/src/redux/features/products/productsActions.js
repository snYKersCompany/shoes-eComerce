import axios from "axios";
import { getProducts, productsDetails, filterRating, searchByQuery, filterByCategory } from "./productsSlice";

export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/api/products/");
        // const response = await axios("https://snykers.onrender.com/api/products");
        return dispatch(getProducts(response.data.products));
    } catch (error) {
        return error;
    }
};

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("http://localhost:3001/api/products/" + _id);
    // console.log("esto es action getProductDetail -- > ", products.data[0]);

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

export const filterRatings = (payload) => async (dispatch) => {
  try {
    const response = await axios (`http://localhost:3001/api/products?rating=${payload}`)
    const responseFilter = payload === 'all' 
    ? response.data.products
    : response.data.products.filter(e => e.rating)
    return dispatch(filterRating(responseFilter)) 
    } catch (error) {
    return error;
  }
};

export const getProductByQuery = (payload) => async (dispatch) => {
  try {
    const response = await axios ('http://localhost:3001/api/products?search=' + payload)
    return  dispatch(searchByQuery(response.data.products))
  }catch(error){
    return error
  }
};

export const getProductByCategory = (payload) => async (dispatch) => {
  try{
    const response = await axios (`http://localhost:3001/api/categories`)
    console.log('esto es categories', response.data)
    return dispatch(filterByCategory(response.data))
  }catch(error){
    return error
  }
};