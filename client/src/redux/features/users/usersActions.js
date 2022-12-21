import axios from "axios";
import { clearUser, getAllUser, getUser, getUserDashboard, updateUserDashboard, putUser } from "./usersSlice";

export const findOrCreateUser = (payload) => async () => {
  try {
    const post = await axios.post("http://localhost:3001/api/users", payload);
    return post;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    const users = await axios.get("http://localhost:3001/api/users");
    return dispatch(getAllUser(users.data.users));
  } catch (error) {
    return error;
  }
};

export const getUserDashboards = (_id) => async (dispatch) => {
  try {
    if(!_id) return dispatch(getUserDashboard({}));
    const users = await axios.get(
      `http://localhost:3001/api/users/dashboard/${_id}`
    );
    return dispatch(getUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};

export const addUserProductFavorites = (_id, favorite) => async (dispatch) => {
  try {
    if(!_id) return
    const users = await axios.put(`http://localhost:3001/api/users/addFavorite/${_id}`, favorite);
    console.log(users.data)
    return dispatch(updateUserDashboard(users.data));
  } catch (error) {
    return error;
  }
};

export const deleteUserProductFavorites = (_id, favorite) => async (dispatch) => {
  try {
    if(!_id) return
    const users = await axios.put(`http://localhost:3001/api/users/deleteFavorite/${_id}`, favorite);
    console.log(users.data)
    return dispatch(updateUserDashboard(users.data));
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
  try{
    console.log(change)
    const response = await axios.put(`http://localhost:3001/api/users/update/${user}`, change)
    console.log(response.data)
    return dispatch(getUserDashboard(response.data[0]))
    return
  } catch(error){
    return error
  }

}
