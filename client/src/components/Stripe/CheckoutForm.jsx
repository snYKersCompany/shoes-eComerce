import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetails } from "../../redux/features/products/productsActions";
import "../../styles/Stripe.css";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import axios from "axios";


const CheckoutForm = ({InfoToSend}) => {

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {  productsDetails } = useSelector((state) => state.products);

  useEffect(() => {
    
    dispatch(getProductsDetails(id));
    console.log( productsDetails);
  }, [dispatch, id]);

 

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);

    if (!error) {
  
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkouts/payments",
          {
            id,
            amount:  InfoToSend.finalAmount,
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
  };

  console.log(!stripe || loading);

  return (
    <form className="form" onSubmit={handleSubmit}>

      <div className="form-group">
        <CardElement />
      </div>

      <button disabled={!stripe} className="button btn btn-success">
        {loading ? (
          <div >
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Buy"
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
