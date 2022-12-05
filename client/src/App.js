import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from "./components/Landing"
import SearchBar from './components/SearchBar';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
        </Switch>

        //home
        <Switch>
          <Route exact path="/home" component={SearchBar} />
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;