const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENTE, PAYPAL_API_SECRET } = require("../../../config")

const createOrder = async (req, res) => {
    try {
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

        const params = new URLSearchParams();
        params.append("grant_type", "client_credentials")

        const { data: { access_token } } = await axios.post(`https://api-m.sandbox.paypal.com/v1/oauth2/token`, params, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },

            auth: {
                username: PAYPAL_API_CLIENTE,
                password: PAYPAL_API_SECRET
            }
        })

        const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        console.log(result.data)
        res.send(result.data)
    } catch (error) {
        res.send(error)
    }
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
