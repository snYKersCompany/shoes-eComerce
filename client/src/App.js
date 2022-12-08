import React from 'react';
import { Routes, Route, } from "react-router-dom"
import { AuthProvider } from "./context/authContext"
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Details from './components/Details/Details';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<ProtectedRoute><Details /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;