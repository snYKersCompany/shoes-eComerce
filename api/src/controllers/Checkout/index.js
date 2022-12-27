require("dotenv").config()
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);


const createCheckout = async (req, res) => {
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
  });

  res.send({ url: session.url });
};


module.exports = {
  createCheckout
};