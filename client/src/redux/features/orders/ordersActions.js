import axios from "axios"
import { clearOrderDetail, getAllOrder, getOrderDetail } from "./ordersSlice";

export const getAllOrders = () => async (dispatch) => {
    try {
        const orders = await axios.get("http://localhost:3001/api/orders");
        return dispatch(getAllOrder(orders.data.order));
    } catch (error) {
        return error;
    }
};

export const getOrderDetails = (_id) => async (dispatch) => {
    try {
        const orders = await axios.get(`http://localhost:3001/api/orders/${_id}`);
        return dispatch(getOrderDetail(orders.data));
    } catch (error) {
        return error;
    }
};

export const clearOrderDetails = () => async (dispatch) => {
    try {
        return dispatch(clearOrderDetail({}));
    } catch (error) {
        return error;
    }
};

export const getCreateOrderDB = (payload) => {
    try {
        const order = axios.post("http://localhost:3001/api/orders/create", payload)
        return order.data
    } catch (error) {
        return error
    }
}