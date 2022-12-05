import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"
import SearchBar from "./components/SearchBar/SearchBar"
import Paginated from "./components/Paged/Paginated";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Characters} />
        </Switch>
        <Switch>
          <Route exact path="/home"> 
            <SearchBar/>
            <Paginated/>  
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;