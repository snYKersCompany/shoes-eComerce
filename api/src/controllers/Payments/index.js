require('dotenv').config();
const axios = require("axios");
const { PAYPAL_API, PAYPAL_API_CLIENTE, PAYPAL_API_SECRET, HOST } = require("../../../config")

const createOrder = async (req, res) => {
    // const { amount, description } = req.body;
    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "100"
                    },
                    return_url: "http://localhost:3000/order-completed",
                }
            ]
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
        res.send(result.data);
    } catch (error) {
        res.send(error);
    }
};

const captureOrder = async (req, res) => {
    const { token, PayerID } = req.query

    const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: PAYPAL_API_CLIENTE,
            password: PAYPAL_API_SECRET
        }
    })
    const message = await axios.post(`http://localhost:3001/api/orders/create`, result.data);
    res.status(200).send(message);
};

const cancelOrder = async (req, res) => {
    res.status(200).send("order canceled")
    // const { token, PayerID } = req.query

    // const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/cancel`, {}, {
    //     auth: {
    //         username: PAYPAL_API_CLIENTE,
    //         password: PAYPAL_API_SECRET
    //     }
    // })
    // const message = await axios.post(`http://localhost:3001/api/orders/cancel`, result.data);
    // res.status(200).send(message);
};


module.exports = {
    createOrder,
    captureOrder,
    cancelOrder
}