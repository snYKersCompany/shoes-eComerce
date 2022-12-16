import axios from "axios"
import { getAllUser, userByID } from "./usersSlice";

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

export const getUserById = (_id) => async (dispatch) => {
    try{
        const userId = await axios(`http://localhost:3001/api/users/${_id}`)
        console.log('esto es getUserById ACTION -->',userId.data)
        return dispatch(userByID(userId.data))
    }
    catch(error){
        return error
    }
}