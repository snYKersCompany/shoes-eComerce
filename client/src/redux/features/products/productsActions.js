import axios from "axios";
import { getProducts, productsDetails } from "./productsSlice";



export const getAllProducts = () => async (dispatch) => {
    try {
        const response = await axios("http://localhost:3001/api/products/");
        return dispatch(getProducts(response.data.products));
    } catch (error) {
        return error;
    }
};


export const getProductsDetails = (_id) => async (dispatch) => {
    try {
      const response = await axios("http://localhost:3001/api/products/" + _id)
      console.log('esto es action getProductDetail -- > ', response.data[0])
  
      return dispatch(productsDetails(response.data[0]))
    }
    catch(error){
      return error
    }
  };
  
  export const createProduct = (payload) => async ()=> {
    try{
      const data = await axios.post('http://localhost:3001/api/products/create', payload)
      return data
    }catch(error){
      return error
    }
  }