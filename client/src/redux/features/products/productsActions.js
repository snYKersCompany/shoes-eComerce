import axios from "axios";
import {
  getProducts,
  productsDetails,
  filterAdd,
  searchByQuery,
  categories,
  clearFilter,
  addOrder,
  deleteOrder,
} from "./productsSlice";

function filterQuery(filters) {
  let filter = Object.entries(filters);
  let query = filter.map((el) => el[0] + "=" + el[1]).join("&");
  return query;
}

export const getAllProducts = (filters, orders) => async (dispatch) => {
  try {
    let query = filterQuery(filters);
    
    let orderBy = JSON.stringify(orders)
    if(orderBy.length === 2) orderBy = ``
    else orderBy = `orderBy=${orderBy}`
    
    let product = await axios(`http://localhost:3001/api/products?${query}&${orderBy}`);
    return dispatch(getProducts(product.data.products));
  } catch (error) {
    return error;
  }
};

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("http://localhost:3001/api/products/" + _id);

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

export const filterAdds = (filter) => async (dispatch) => {
  try {
    return dispatch(filterAdd(filter));
  } catch (error) {
    return error;
  }
};

export const addOrders = (order) => async (dispatch) => {
  try {
    return dispatch(addOrder(order));
  } catch (error) {
    return error;
  }
};

export const deleteOrders = (order) => async (dispatch) => {
  try {
    return dispatch(deleteOrder(order));
  } catch (error) {
    return error;
  }
};

export const getProductByQuery = (payload) => async (dispatch) => {
  try {
    const response = await axios(
      "http://localhost:3001/api/products?search=" + payload
    );
    return dispatch(searchByQuery(response.data.products));
  } catch (error) {
    return error;
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios(`http://localhost:3001/api/categories`);
    return dispatch(categories(response.data));
  } catch (error) {
    return error;
  }
};

export const clearFilters = () => async (dispatch) => {
  try {
    return dispatch(clearFilter({}));
  } catch (error) {
    return error;
  }
};
