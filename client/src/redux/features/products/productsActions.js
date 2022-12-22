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
  addSearch,
  clearSearch,
  clearOrder,
} from "./productsSlice";

function filterQuery(filters) {
  let filter = Object.entries(filters);
  let query = filter.map((el) => el[0] + "=" + el[1]).join("&");
  return query;
}

export const getAllProducts =
  (filters = {}, orders = {}, search = "") =>
  async (dispatch) => {
    try {
      let query = filterQuery(filters);
      console.log(filters);
      console.log(orders);
      console.log(search);

      let orderBy = JSON.stringify(orders);
      if (orderBy.length === 2) orderBy = ``;
      else orderBy = `orderBy=${orderBy}`;

      let searchBy = "";
      if (search.length) searchBy = `search=${search}`;

      let product = await axios(`/products?${query}&${orderBy}&${searchBy}`);
      return dispatch(getProducts(product.data.products));
    } catch (error) {
      return error;
    }
  };

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("/products/details/" + _id);

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
    const post = await axios.post("/products/create", payload);
    return post;
  } catch (error) {
    return error;
  }
};

export const deleteProducts = (_id) => async () => {
  try {
    const delete_ = await axios.delete(`/products/${_id}`);
    return delete_;
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

export const addSearchs = (search) => async (dispatch) => {
  try {
    return dispatch(addSearch(search));
  } catch (error) {
    return error;
  }
};

export const clearOrders = () => async (dispatch) => {
  try {
    return dispatch(clearOrder({}));
  } catch (error) {
    return error;
  }
};

export const clearSearchs = () => async (dispatch) => {
  try {
    return dispatch(clearSearch({}));
  } catch (error) {
    return error;
  }
};

export const getProductByQuery = (payload) => async (dispatch) => {
  try {
    const response = await axios("/products?search=" + payload);
    return dispatch(searchByQuery(response.data.products));
  } catch (error) {
    return error;
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const response = await axios(`/categories`);
    return dispatch(filterByCategories(response.data));
  } catch (error) {
    return error;
  }
};

export const getBrands = () => async (dispatch) => {
  try {
    const response = await axios(`/products`);
    const mapeadito = await response.data.products.map((e) => e.brand);
    const dry = [...new Set(mapeadito)];
    return dispatch(filterBrands(dry));
  } catch (error) {
    return error;
  }
};

export const getRatings = () => async (dispatch) => {
  try {
    const response = await axios(`/products`);
    const mapeadito = response.data.products.map((e) => e.rating);
    const dry = [...new Set(mapeadito)].sort();
    return dispatch(filterRatings(dry));
  } catch (error) {
    return error;
  }
};

export const getGenders = () => async (dispatch) => {
  try {
    const response = await axios(`/products`);
    const mapeo = await response.data.products.map((e) => e.gender);
    const join = mapeo.join().split(",");
    const dry = [...new Set(join)];
    return dispatch(filterByGenders(dry));
  } catch (error) {
    return error;
  }
};

export const putProduct = (_id, body) => async (dispatch) => {
  try {
    const response = await axios.put(`/products/modify/${_id}`, body);
    console.log("Esto es putProduct");
    console.log({ _id, body });
    console.log(response.data);
    return dispatch(productsDetails(response.data[0]));
  } catch (error) {
    return error;
  }
};
