import axios from "axios";
import { getAllUser, getUserDashboard } from "./usersSlice";

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
    const users = await axios.get(
      `http://localhost:3001/api/users/dashboard/${_id}`
    );
    return dispatch(getUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};


export const modifyUser = (_id, payload) => async (dispatch) => {
  console.log('esto es _id en actions', _id)
  console.log('esto es payload en actions', payload)
  // try{
  //   // const modified = await axios.put(`http://localhost:3001/api/users/${_id}`, payload)
  //   console.log('esto es el console.log de _id', _id)
  //   console.log('esto es el console.log de payload', payload)
  //   // console.log('esto es modified.data', modified.data)
  // } catch(error){
  //   return error
  // }
}