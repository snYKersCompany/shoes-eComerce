import axios from "axios";

export const getCreateOrderPP = (payload) => {
  try {
    const order = axios.post("/payments/create-order", payload);
    return order.data;
  } catch (error) {
    return error;
  }
};

export const getCaptureOrderPP = (payload) => {
  try {
    const order = axios.post("/payments/capture-order", payload);
    return order.data;
  } catch (error) {
    return error;
  }
};

export const getCancelOrderPP = () => {
  try {
    const deleted = axios.delete("/payments/cancel-order");
    return deleted;
  } catch (error) {
    return error;
  }
};
