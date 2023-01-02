import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";//BS
import Button from "react-bootstrap/Button";//utils
import axios from "axios";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { createPayment } from "../../redux/features/orders/ordersActions";


const Payment = ({ products, finalAmout }) => {
  const { user } = useAuth();   //   Reemplazar por userDashboard
  const { userDashboard } = useSelector((state) => state.users);
  const navigate = useNavigate();


  const [paymentMethod, setPaymentMethod] = useState("")

  useEffect(() => {
    if (user) {
      console.log("user de firebase en home", user);
    }
  }, [user]);
  // console.log("Payment products", products);

  const handleClick = async () => {
    try {
      if(paymentMethod === "stripe"){
        if (user) {
          axios.post("http://localhost:3001/api/chekcouts", {products,})
            .then((res) => {
              if (res.data.url) window.location.href = res.data.url;
            })
              .catch((err) => console.log(err.message));
        } else { navigate("/register") }
      }
      
      if(paymentMethod === "paypal") {
        const body = {
          finalAmout,
          products,
          user
        }
        console.log(body)
        const voucher = await createPayment(body)
        const {href} = voucher.links.find(link => link.rel === "approve")
        window.location.href = href
      }
    } catch (error) { console.log(error) }


    // console.log(paymentMethod)
    // if(paymentMethod === "stripe"){
    //   console.log(paymentMethod)
    //   axios.post("http://localhost:3001/api/checkouts", {products,})
    //     .then((res) => { if (res.data.url) window.location.href = res.data.url })
    //     .catch((err) => console.log(err.message) );
    // }
    
  };

  return (
    <>
      <Form>
      {['paypal', 'stripe'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label={type}
            name="group1"
            type="radio"
            id={`inline-${type}`}
            onClick={()=>setPaymentMethod(type)}
          />
        </div>
      ))}
    </Form>
        <Button 
        variant="secondary customBtn" 
        onClick={() => handleClick()}
        disabled={!paymentMethod.length}>
          Buy
        </Button>
      
    </>
  );
};

export default Payment;
