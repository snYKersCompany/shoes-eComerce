import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "../../styles/Stripe.css";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import AlertMSJ from "../Auth/AlertMSJ";

const CheckoutForm = ({ priceTotal, products }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    try {
      if (error) {
        throw new Error(error);
      } else {
        const { id } = paymentMethod;
        const { data } = await axios.post(
          "http://localhost:3001/api/checkouts/payments",
          {
            id,
            amount: priceTotal,
          }
        );
        navigate("/order-completed");
        elements.getElement(CardElement).clear();
        setLoading(false);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      <AlertMSJ message={error.message} />;
    }
  };

  console.log(!stripe || loading);

  return (
    <>
      {error && <AlertMSJ message={error} />}
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <CardElement />
        </div>

        <button disabled={!stripe} className="button btn btn-success">
          {loading ? (
            <div>
              <span>Loading</span>
            </div>
          ) : (
            <div>
              <span>Buy</span>
            </div>
          )}
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
