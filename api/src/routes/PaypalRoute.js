const express = require('express')
const request = require('request')
const { postNewOrder, putOrderPaypal } = require('../controllers/Order/index')
// const { response } = require('../app')
const router = express.Router()

const CLIENT = "ASSuTArS2TKZet8lZDi7sT1Uftx6WRFp-imJ-DKmoOj2QExOiRsHC6oo4RvIHjZ5sdPf28AGzReqObX7"
const SECRET = "EJpQuzy3O8iusVbMbFoWf7QI4RdKfHGR2L3Zx17vLnN_I2ZR9_3IFx0z6JtvnloTsKp1ODOpkG-Dtnco"
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; 
// const PAYPAL_API = 'https://api-m.paypal.com'; 
const auth = { user: CLIENT, pass: SECRET};


const createPayment = (req, res)=>{

    const { finalAmout, products, user } = req.body;
    const _id = user.uid
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/reference/currency-codes/
                value: String(finalAmout)
            }
        }],
        application_context: {
            brand_name: 'Snikets.com', // Nombre de la empresa
            landing_page: 'LOGIN',  // NO_PREFERENCE    Configuracion del formulario de PAYPAL
            user_action: 'PAY_NOW',
            return_url: `http://localhost:3000/order-completed?payment=paypal&_id=${_id}`,
            cancel_url: `http://localhost:3000/order-canceled?payment=paypal&_id=${_id}`
        }
    }
    //         return_url: 'http://localhost:3000/execute-payment',
    //         cancel_url: 'http://localhost:3000/cancel-payment'

    request.post(`${PAYPAL_API}/v2/checkout/orders`, {
        auth,
        body,
        json:true
    }, (err, response)=>{
        const data = response.body
        console.log(data)
        //      CREAR NUEVA ORDEN CON LOS DATOS { finalAmout, products, user, data }
        if(data.status === 'CREATED') postNewOrder(products, finalAmout, user, data)

        res.json({ data })
    })
}
router.post('/create-payment', createPayment) 


const executePayment = (req, res)=>{
    const token = req.query.token;
    const _id = req.query._id;

    request.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {
        auth,
        body:{},
        json: true
    }, (err, response)=>{

        const data = response.body
        console.log({data})
        
        putOrderPaypal(token, _id, data)
        //  HACER VALIDACION PARA SAVER SI ES APROVE O CANCELED Y MODIFICAR LA ORDEN 


        res.json({data: response.body})
    })
}
router.get('/execute-payment', executePayment)
  

module.exports = router;