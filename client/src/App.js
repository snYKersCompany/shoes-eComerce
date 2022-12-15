import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Create from "./components/Create/Create";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AdminDashboardProducts from "./components/AdminDashboard/AdminDashboardProducts";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          {/* Ruta creada para visualizar el componente AdminDashboardProducts*/}
          <Route
            path="/adminDashboardProducts"
            element={<AdminDashboardProducts />}
          ></Route>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <UserDashboard />
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
