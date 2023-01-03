import React from "react";
import { Routes, Route } from "react-router-dom";
//Providers
import { AuthProvider } from "./context/authContext";
//JSX
import Basketball from "./components/Home/Basketball/index";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CheckoutCancel from "./components/Paypal/CheckoutCancel";
import CheckoutSuccess from "./components/Paypal/CheckoutSuccess";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Preview from "./components/Paypal/Preview/Preview";
import Error404 from "./components/Error404/Error404";
import Main from "./components/Home/Main";
import Women from "./components/Home/Women";
import Checkout from './components/Checkout/Checkout';
//styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Stripe
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51MHXZUEgY6MBu39VFoEgCPs7p60pA9GRQ50lY1Tt0g8KDajCchKvX33hZ3QUBrEkOr3N2wUr2Z3Sved9g6YdhbgM00knycrACa"
);

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/women" element={<Women />} />
          <Route path="/" element={<Home />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-canceled" element={<CheckoutCancel />} />
          <Route path="/order-completed" element={<CheckoutSuccess />} />
          <Route path="/checkout/:id" element={
            <Elements stripe={stripePromise}>
              <Checkout />
            </Elements>} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/account/:section"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/home/:id" element={<Details />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;