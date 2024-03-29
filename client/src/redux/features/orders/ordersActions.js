import axios from "axios";
import { clearOrderDetail, getAllOrder, getOrderDetail } from "./ordersSlice";

export const getAllOrders = (body = {}, _id = "") => async (dispatch) => {
  try {
    const jsonBody = JSON.stringify(body)

    let _idQuery = ""
    if (_id.length) _idQuery = `&_id=${_id}`
    const orders = await axios.get(`/orders?ordersSort=${jsonBody}${_idQuery}`);
    return dispatch(getAllOrder(orders.data.order));
  } catch (error) {
    return error;
  }
};

export const getOrderDetails = (_id) => async (dispatch) => {
  try {
    const orders = await axios.get(`/orders/${_id}`);
    console.log(orders.data)
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
    const order = axios.post("/orders/create", payload);
    return order.data;
  } catch (error) {
    return error;
  }
};

//    ===============================================
export const createPayment = async (body) => {
  try {
    const vaucher = await axios.post(`/paypal/create-payment`, body)
    return vaucher.data
  } catch (error) {
    return error
  }
};

export const executePayment = async (token) => {
  try {
    const vaucher = await axios.get(`/paypal/execute-payment${token}`)
    return vaucher.data
  } catch (error) {
    return error
  }
};

export const changeStatusOrder = (id, payload,) => async (dispatch) => {
  try {
    const vaucher = await axios.put(`/orders/${id}`, { voucher: payload })
    return vaucher.data
  } catch (error) {
    return error
  }
}

//    ===============================================
