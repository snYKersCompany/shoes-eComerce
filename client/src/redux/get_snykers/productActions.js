import axios from "axios";
import { getProducts, getProductsDetails } from "./productSlice";

export const getAllProducts = () => async (dispatch) => {
  try {
    const response = await axios("http://localhost:3001/api/products");
    return dispatch(getProducts(response.data.products));
  } catch (error) {
    return error;
  }
};


export const getProductDetail = (id) => async (dispatch) => {
  try {
    const response = await axios(`http://localhost:3001/api/products/${id}`)
    console.log(...response.data)
    return dispatch(getProductsDetails(...response.data))
  }
  catch(error){
    return error
  }
}

export const createProduct = (payload) => async ()=> {
  try{
    const data = await axios.post('http://localhost:3001/api/products/create', payload)
    return data
  }catch(error){
    return error
  }
}
