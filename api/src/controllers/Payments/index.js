const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENTE, PAYPAL_API_SECRET } = require("../../../config")
console.log(PAYPAL_API)
const createOrder = async (req, res) => {
    const order = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "100"
                },
                description: "Shoes Snyckers",
            },
        ],
        application_context: {
            brand_name: "Snyckers.com",
            landing_page: "LOGIN",
            user_action: "PAY_NOW",
            return_url: "https://localhost:3001/capture-order",
            cancel_url: "https://localhost:3001/cancel-order"
        }
    };
    const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
        auth: {
            username: PAYPAL_API_CLIENTE,
            password: PAYPAL_API_SECRET

        }
    });
    console.log(result.data)
    res.send("Ruta create order")
};



const captureOrder = (req, res) => {
    res.send("Creating order")
};


const cancelOrder = (req, res) => {
    res.send("Creating order")
};


module.exports = {
    createOrder,
    captureOrder,
    cancelOrder
}
