import { BrowserRouter, Route, Switch } from "react-router-dom"
import Characters from "./components/Characters"
import SearchBar from "./components/SearchBar/SearchBar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Characters} />
          <Route exact path="/home" component={SearchBar} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;