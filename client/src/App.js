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
import UserProtectedRoute from "./components/ProtectedRoute/UserProtectedRoute";
import EmailVerifiedProtectedRoute from "./components/ProtectedRoute/EmailVerifiedProtectedRoute";
import CheckoutCancel from "./components/Checkout/CheckoutCancel";
import CheckoutSuccess from "./components/Checkout/CheckoutSuccess";
import Cart from "./components/Cart/Cart";
import Dashboard from "./components/Dashboard/Dashboard";
import Preview from "./components/Paypal/Preview/Preview";
import Error404 from "./components/Error404/Error404";
import Main from "./components/Home/Main";
import Women from "./components/Home/Women";
import Checkout from './components/Checkout/Checkout';
import RestorePassword from "./components/Auth/RestorePassword";
import FormUserUpdate from './components/Checkout/UpdateUser';
import DemoGrid from "./components/DemoGrid/DemoGrid"
import EmailVerification from "./components/Auth/EmailVerification";

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
          <Route path="/restore-password" element={<RestorePassword />} />
          <Route path="/verify-email" element={<UserProtectedRoute><EmailVerification /></UserProtectedRoute>} />
          <Route path="/register" element={<Register />} />
          <Route path="/order-canceled" element={<CheckoutCancel />} />
          <Route path="/order-completed" element={<CheckoutSuccess />} />
          <Route path="/checkout/:id" element={
            <Elements stripe={stripePromise}>
              <EmailVerifiedProtectedRoute>
                <Checkout />
              </EmailVerifiedProtectedRoute>
            </Elements>
          } />
          <Route path="/cart" element={<UserProtectedRoute><Cart /></UserProtectedRoute>} />
          <Route
            path="/account/:section"
            element={
              <EmailVerifiedProtectedRoute>
                <Dashboard />
              </EmailVerifiedProtectedRoute>
            }
          />

          <Route path="/demogrid" element={<DemoGrid />} />

          <Route path="/home/:id" element={<Details />} />
          <Route path="/preview" element={<Preview />} />
          <Route path='/update' element={<FormUserUpdate />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;