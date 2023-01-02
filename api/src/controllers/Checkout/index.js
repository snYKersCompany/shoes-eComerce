require("dotenv").config()
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);


const createCheckout = async (req, res) => {
  try {
    const line_items = req.body.products.map((item) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            images: [item.img],
            metadata: {
              id: item.id
            }
          },
          unit_amount: item.price * 100,
        },
        quantity: item.count,
      }
    })

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:3000/order-completed',
      cancel_url: 'http://localhost:3000/order-canceled',
      // success_url: 'https://snykers.vercel.app/order-completed',
      // cancel_url: 'https://snykers.vercel.app/order-canceled',
    });

    //CREACION DE ORDEN

    res.send({ url: session.url });
  } catch (error) {
    console.log(error)
  }
};


module.exports = {
  createCheckout
};