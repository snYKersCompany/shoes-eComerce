import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"
import Home from './components/Home/Home';
import Create from './components/Create/Create';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
        <Switch>
        <Route exact path="/home" component={Home} />
        </Switch>

        <Switch>
        <Route exact path="/create" component={Create} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;