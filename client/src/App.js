import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/details" component={Details} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;