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
    console.log(users.data[0])
    return dispatch(getUserDashboard(users.data[0]));
  } catch (error) {
    return error;
  }
};
