import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from "./components/Landing"
import SearchBar from './components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>

        <Switch>
          <Route exact path="/home" component={SearchBar} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;