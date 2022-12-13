import axios from "axios"
import { postUser } from "./usersSlice"

export const createUser = (payload) => async () => {
    try {
        const post = await axios.post(
            "http://localhost:3001/api/users", payload);
        return post;
    } catch (error) {
        return error;
    }
};