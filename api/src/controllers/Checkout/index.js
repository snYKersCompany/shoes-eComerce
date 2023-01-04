require("dotenv").config()
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const { postNewOrder } = require("../../controllers/Order/index")


const createCheckout = async (req, res) => {
  try {
    const { finalAmount, products, user } = req.body;
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

    let newOrder = await postNewOrder(products, finalAmount, user, {})

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `http://localhost:3000/order-completed?payment=stripe&_id=${newOrder._id}`,
      cancel_url: `http://localhost:3000/order-canceled?payment=stripe&_id=${newOrder._id}`,
      // success_url: 'https://snykers.vercel.app/order-completed?payment=stripe',
      // cancel_url: 'https://snykers.vercel.app/order-canceled?payment=stripe',
    });


    res.send({ url: session.url });
  } catch (error) {
    console.log(error)
  }
};


module.exports = {
  createCheckout
};