import axios from "axios";
import {
  getProducts,
  productsDetails,
  filterAdd,
  searchByQuery,
  filterByCategories,
  clearFilter,
  addOrder,
  deleteOrder,
  deletefilter,
  filterBrands,
  filterRatings,
  filterByGenders,
  clearProductsDetails,
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
    if (orderBy.length === 2) orderBy = ``
    else orderBy = `orderBy=${orderBy}`

    let product = await axios(`http://localhost:3001/api/products?${query}&${orderBy}`);
    return dispatch(getProducts(product.data.products));
  } catch (error) {
    return error;
  }
};

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("http://localhost:3001/api/products/details/" + _id);

    return dispatch(productsDetails(products.data[0]));
  } catch (error) {
    return error;
  }
};

export const clearProductsDetail = () => async (dispatch) => {
  try {
    return dispatch(clearProductsDetails({}));
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

export const deleteProducts = (_id) => async () => {
  try {
    const delete_ = await axios.delete(
      `http://localhost:3001/api/products/${_id}`
    );
    return delete_
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

export const deletefilters = (filter) => async (dispatch) => {
  try {
    return dispatch(deletefilter(filter));
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
    return dispatch(filterByCategories(response.data));
  } catch (error) {
    return error;
  }
};


export const getBrands = () => async (dispatch) => {
  try {
    const response = await axios(`http://localhost:3001/api/products`)
    const mapeadito = await response.data.products.map(e => e.brand)
    const dry = [...new Set(mapeadito)]
    return dispatch(filterBrands(dry))
  } catch (error) {
    return error
  }
}

export const getRatings = () => async (dispatch) => {
  try {
    const response = await axios(`http://localhost:3001/api/products`)
    const mapeadito = response.data.products.map(e => e.rating)
    const dry = [...new Set(mapeadito)].sort()
    return dispatch(filterRatings(dry))
  } catch (error) {
    return error
  }
}

export const getGenders = () => async (dispatch) => {
  try{
    const response = await axios(`http://localhost:3001/api/products`)
    const mapeo = await response.data.products.map(e=> e.gender)
    const join = mapeo.join().split(',')
    const dry = [...new Set(join)]
    return dispatch(filterByGenders(dry))
  }catch(error){
    return error
  }
}