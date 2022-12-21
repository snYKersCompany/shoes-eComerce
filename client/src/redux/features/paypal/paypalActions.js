import axios from "axios"

export const getCreateOrderPP = (payload) => {
    try {
        const order = axios.post("http://localhost:3001/api/payments/create-order", payload)
        return order.data
    } catch (error) {
        return error
    }
}

export const getCaptureOrderPP = (payload) => {
    try {
        const order = axios.post("http://localhost:3001/api/payments/capture-order", payload)
        return order.data
    } catch (error) {
        return error
    }

}

export const getCancelOrderPP = () => {
    try {
        const deleted = axios.delete("http://localhost:3001/api/payments/cancel-order")
        return deleted
    } catch (error) {
        return error
    }
}

