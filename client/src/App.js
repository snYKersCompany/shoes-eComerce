import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import Home from "./components/Home/Home";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Details from "./components/Details/Details";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Create from './components/Create/Create';
import UserDashboard from "./components/UserDashboard/UserDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
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
          <Route path="/home/:id" element={<Details />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
