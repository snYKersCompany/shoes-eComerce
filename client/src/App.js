import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home';
import { AuthProvider } from "./context/authContext"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter >
    </AuthProvider>
  );
}

export default App;