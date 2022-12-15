import axios from "axios"

export const findOrCreateUser = (payload) => async () => {
    try {
        const post = await axios.post("http://localhost:3001/api/users", payload);
        return post;
    } catch (error) {
        return error;
    }
};