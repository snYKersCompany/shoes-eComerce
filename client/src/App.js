import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/footer' component={Footer}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;