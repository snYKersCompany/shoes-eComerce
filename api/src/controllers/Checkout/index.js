const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51MHXZUEgY6MBu39VO7dnnFFp94Te9eBqnmjhuLQK2wSZMeQhn4GmIx8otuyuodQfhum25D3YYFiocNC0qvhKybup00huDmqVys");


const createCheckout = async (req, res) => {
  const { amount } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
}

module.exports = {
  createCheckout
};