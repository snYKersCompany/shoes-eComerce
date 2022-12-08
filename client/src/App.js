import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "./context/authContext"
import Home from './components/Home/Home';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Details from './components/Details/Details';
import UserDashboard from "./components/UserDashboard/UserDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Create from './components/Create/Create';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<Details />} />
          <Route path = "/account/:id" element={UserDashboard}/>
          <Route path='/create' element={<Create/>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;