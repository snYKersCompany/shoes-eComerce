import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from './components/Footer';
=======
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"
import Home from './components/Home/Home';


>>>>>>> dev

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
<<<<<<< HEAD
          <Route path='/footer' component={Footer}/>
=======
          <Route exact path="/" component={Characters} />
        </Switch>
        <Switch>
        <Route exact path="/home" component={Home} />

>>>>>>> dev
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;