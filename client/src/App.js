import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/authContext"
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Details from './components/Details/Details';
import UserDashboard from "./components/UserDashboard/UserDashboard";
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
          <Route path="/details/:id" element={<Details />} />
          <Route path = "/account/:id" element={UserDashboard}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;