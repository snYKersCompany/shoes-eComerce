import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Create from "./components/Create/Create";
import CancelPayment from "./components/Paypal/CancelPayment"
import CapturePayment from "./components/Paypal/CapturePayment"
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Preview from "./components/Paypal/Preview/Preview"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          {/* Ruta gregada solo para hacer pruebas */}
          {/* <Route path="/middleViewCard" element={<MiddleViewCard />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/order-canceled" element={< CancelPayment />} />
          <Route path="/order-completed" element={< CapturePayment />} />

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
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </AuthProvider>
    </div >
  );
}

export default App;
