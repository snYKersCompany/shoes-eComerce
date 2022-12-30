import axios from "axios";
import { addOrder, addSearch, clearSearch } from "../products/productsSlice";
import {
  clearUser,
  getAllUser,
  getUser,
  getUserDashboard,
  updateUserDashboard,
} from "./usersSlice";

export const findOrCreateUser = (payload) => async () => {
  try {
    const post = await axios.post("/users", payload);
    return post;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = (body={}) => async (dispatch) => {
  try {
    console.log('parado en las actions',JSON.stringify(body))
    const jsonBody = JSON.stringify(body)
    const users = await axios.get(`/users?orderSearch=${jsonBody}`);
    return dispatch(getAllUser(users.data.users));
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

export const clearSearchs = () => async (dispatch) => {
  try {
    return dispatch(clearSearch({}));
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

export const getUserDashboards = (_id) => async (dispatch) => {
  try {
    if (!_id) return dispatch(getUserDashboard({}));
    const users = await axios.get(`/users/dashboard/${_id}`);
    // console.log(users.data[0])
    return dispatch(getUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};

export const addUserProductFavorites = (_id, favorite) => async (dispatch) => {
  try {
    if (!_id) return;
    const users = await axios.put(`/users/addFavorite/${_id}`, favorite);
    console.log(users.data[0]);
    return dispatch(updateUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};


export const deleteUserProductFavorites = (_id, favorite) => async (dispatch) => {
  try {
    if (!_id) return;
    const users = await axios.put(`/users/deleteFavorite/${_id}`, favorite);
    console.log(users.data[0]);
    return dispatch(updateUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};

export const getOneUser = (user) => async (dispatch) => {
  try {
    return dispatch(getUser(user));
  } catch (error) {
    return error;
  }
};

export const clearUsers = () => async (dispatch) => {
  try {
    return dispatch(clearUser({}));
  } catch (error) {
    return error;
  }
};

export const putUserInformation = (user, change) => async (dispatch) => {
  try {
    // console.log(change);
    // console.log(user);
    const response = await axios.put(`/users/update/${user}`, change);
    // console.log("cambios para el user ", response.data);
    return dispatch(updateUserDashboard(response.data[0]));
  } catch (error) {
    return error;
  }
};

export const putUserStatus = (id, body) => async (dispatch) => {
  
  try{
    console.log({body})
    const putStatusUser = await axios.put(`/users/update/${id}`, body);//como son 2 valores los esperados
                                                      //espero que se haga en el back
    return putStatusUser
  }catch(error){
    return error;
  }
};

export const deleteUser = (_id, body={}) => async (dispatch) => {
  try{
    const jsonBody = JSON.stringify(body)
    const deleteOneUser = await axios.delete(`/users/${_id}?orderSearch=${jsonBody}`)
    console.log(deleteOneUser.data)
    return dispatch(getAllUser(deleteOneUser.data.users));
  }catch(error){
    return error
  }
};
