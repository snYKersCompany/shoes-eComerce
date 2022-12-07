import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { AuthProvider } from "./context/authContext"
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
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;