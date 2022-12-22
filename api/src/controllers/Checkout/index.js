const Stripe = require("stripe");
const stripe = new Stripe("sk_test_51MHXZUEgY6MBu39VO7dnnFFp94Te9eBqnmjhuLQK2wSZMeQhn4GmIx8otuyuodQfhum25D3YYFiocNC0qvhKybup00huDmqVys");


const createCheckout = async (req, res) => {
    // you can get more data to find in a database, and so on
    const { id, amount} = req.body;
    console.log(req.body)

    try {
      const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "USD",
        description: "nombre del producto",
        payment_method: id,
        confirm: true, //confirm the payment at the same time
      });
  
      console.log(payment);
  
      return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
      console.log(error);
      return res.json({ message: error.raw.message });
    }
  };


module.exports = {
    createCheckout
};