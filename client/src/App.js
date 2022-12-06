import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"
import Home from './components/Home/Home';
import AuthProvider from './context/authContext';



function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
        <Switch>
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;