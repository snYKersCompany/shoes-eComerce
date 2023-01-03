import axios from "axios";
import { clearOrderDetail, getAllOrder, getOrderDetail } from "./ordersSlice";

export const getAllOrders = (body={}) => async (dispatch) => {
  try {
    // console.log('esto es getAllOrders en actions',JSON.stringify(body))
    const jsonBody = JSON.stringify(body)
    const orders = await axios.get(`/orders?ordersSort=${jsonBody}`);
    // console.log('esto es orders en getAllOrders actions', orders.data.order)
    return dispatch(getAllOrder(orders.data.order));
  } catch (error) {
    return error;
  }
};

export const getOrderDetails = (_id) => async (dispatch) => {
  try {
    console.log(orders)
    const orders = await axios.get(`/orders/${_id}`);
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
  try{
      const vaucher = await axios.post(`http://localhost:3001/api/paypal/create-payment`, body)
      // console.log('esto es ==> createPayment')
      // console.log(vaucher.data.data)
      // const url = vaucher.data.data.links.find(link => link.rel === "approve")
      // window.location.href = url

      return vaucher.data.data
  }catch(error){
      return error
  }
};

export const executePayment = async (token) => {
  try{
      const vaucher = await axios.get(`http://localhost:3001/api/paypal/execute-payment${token}`)
      console.log('esto es ==> executePayment')
      console.log(token)
      console.log(vaucher.data.data)

      return vaucher.data.data
  }catch(error){
      return error
  }
};
//    ===============================================

