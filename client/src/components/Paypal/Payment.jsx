import React, { useState } from "react";
//BS
import Button from "react-bootstrap/Button";
//utils
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useDispatch } from "react-redux";
import { createPayment } from "../../redux/features/orders/ordersActions";


const Payment = ({ products, finalAmout }) => {
  const { user } = useAuth();   //   Reemplazar por userDashboard
  

  const [paymentMethod, setPaymentMethod] = useState("")

  useEffect(() => {
    if (user) {
      console.log("user de firebase en home", user);
    }
  }, [user]);
  // console.log("Payment products", products);

  const handleClick = async () => {
    // console.log(paymentMethod)
    if(paymentMethod === "stripe"){
      console.log(paymentMethod)
      axios.post("http://localhost:3001/api/checkouts", {products,})
        .then((res) => { if (res.data.url) window.location.href = res.data.url })
        .catch((err) => console.log(err.message) );
    }
    
    if(paymentMethod === "paypal") {
      // const body = {
      //   intent: 'CAPTURE',
      //   purchase_units: [{
      //     amount: {
      //       currency_code: 'USD', //  https://developer.paypal.com/reference/currency-codes/
      //       value: String(finalAmout)
      //     }
      //   }],
      //   application_context: {
      //     brand_name: 'Snikets.com', // Nombre de la empresa
      //     landing_page: 'LOGIN',  // NO_PREFERENCE    Configuracion del formulario de PAYPAL
      //     user_action: 'PAY_NOW',
      //     return_url: 'http://localhost:3000/order-completed?payment=paypal',
      //     cancel_url: 'http://localhost:3000/order-canceled?payment=paypal'
      //   }
      // }
      const body = {
        finalAmout,
        products,
        user
      }

      console.log(body)
      const voucher = await createPayment(body)
      console.log("Datos para crear Order");
      console.log({finalAmout})
      console.log({voucher})
      console.log(voucher.id) //  token que tenemos que usar para crear la orden
      console.log({products})
      const {href} = voucher.links.find(link => link.rel === "approve")
      console.log(href)
      window.location.href = href
    }
    
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

      {user ? (
        <Button 
        variant="secondary customBtn" 
        onClick={() => handleClick()}
        disabled={!paymentMethod.length}>
          Buy
        </Button>
      ) : (
        <>
          <label>Apparently you are not logged in yet</label>
          <label>Login to continue with your purchase</label>
          <Link to={"/login"}>
            <Button variant="secondary customBtn" 
            >Login</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default Payment;
