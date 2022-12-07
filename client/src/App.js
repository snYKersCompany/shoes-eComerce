import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <h2>Si ves esto esta andando</h2>
        <Route exact path="/home" component={Home} />
      </Switch>
    </BrowserRouter >
  );
}

export default App;