import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"

import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;