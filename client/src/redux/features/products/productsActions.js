import axios from "axios";
import {
  getProducts,
  getCategory,
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
      console.log(filters);
      let query = filterQuery(filters);
      let orderBy = JSON.stringify(orders);
      if (orderBy.length === 2) orderBy = ``;
      else orderBy = `orderBy=${orderBy}`;

      let searchBy = "";
      if (search.length) searchBy = `search=${search}`;

      let product = await axios(`/products?${query}&${orderBy}&${searchBy}`);
      dispatch(getProducts(product.data.products));
    } catch (error) {
      return error;
    }
  };

export const getCategorys =
  (filters = {}, orders = {}, search = "") =>
  async (dispatch) => {
    try {
      const entriesFilter = Object.entries(filters)[0];
      let query = filterQuery(filters);
      let orderBy = JSON.stringify(orders);
      if (orderBy.length === 2) orderBy = ``;
      else orderBy = `orderBy=${orderBy}`;

      let searchBy = "";
      if (search.length) searchBy = `search=${search}`;

      let product = await axios(`/products?${query}&${orderBy}&${searchBy}`);
      dispatch(getCategory([product.data.products, entriesFilter]));
    } catch (error) {
      return error;
    }
  };

export const getProductsDetails = (_id) => async (dispatch) => {
  try {
    const products = await axios("/products/details/" + _id);
    console.log("esto es product detail", products.data[0]);

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
    const del = await axios.delete(`/products/${_id}`);
    return del;
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
    return response;
  } catch (error) {
    return error;
  }
};
