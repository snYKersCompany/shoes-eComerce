import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Create from "./components/Create/Create";
import Cart from "./components/Cart/Cart";
import CheckoutForm from "./components/Stripe/CheckoutForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

//STRIPE
import {loadStripe} from '@stripe/stripe-js';


//Elements engloba a los demas componentes, para que tengan acceso a la coneccion de Stripe.
import {Elements} from '@stripe/react-stripe-js';

//Nos conectamos a stripe, con la clave publica (Acomodar en una variable de entorno)
const stripePromise = loadStripe("pk_test_51MHXZUEgY6MBu39VFoEgCPs7p60pA9GRQ50lY1Tt0g8KDajCchKvX33hZ3QUBrEkOr3N2wUr2Z3Sved9g6YdhbgM00knycrACa")

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/checkouts" element={<Elements stripe={stripePromise}>
          <CheckoutForm/>
          </Elements>} />
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/home/:id" element={<Details />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
