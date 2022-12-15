 require("dotenv").config()
 

 const PAYPAL_API_CLIENTE = process.env.PAYPAL_API_CLIENTE;

 const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET;

const PAYPAL_API = process.env.PAYPAL_API;

 module.exports = {
    PAYPAL_API_CLIENTE,
    PAYPAL_API_SECRET,
    PAYPAL_API
}
