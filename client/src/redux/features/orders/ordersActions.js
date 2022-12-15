import axios from "axios"
import { getAllOrder } from "./ordersSlice";

export const getAllOrders = () => async (dispatch) => {
    try {
        const orders = await axios.get("http://localhost:3001/api/orders");
        console.log(orders.data.order)
        return dispatch(getAllOrder(orders.data.order));
    } catch (error) {
        return error;
    }
};


