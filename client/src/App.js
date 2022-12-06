import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Characters } from "./components/Characters"
import SearchBar from "./components/SearchBar/SearchBar"
import Paginated from "./components/Paged/Paginated";
import Filters from "./components/Filters/Filters";
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
            <Filters/>  
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;