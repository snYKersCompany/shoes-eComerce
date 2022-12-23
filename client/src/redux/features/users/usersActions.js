import axios from "axios";
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

export const getAllUsers = () => async (dispatch) => {
  try {
    const users = await axios.get("/users");
    return dispatch(getAllUser(users.data.users));
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
    console.log(change);
    console.log(user);
    const response = await axios.put(`/users/update/${user}`, change);
    console.log("cambios para el user ", response.data);
    return dispatch(updateUserDashboard(response.data[0]));
  } catch (error) {
    return error;
  }
};
