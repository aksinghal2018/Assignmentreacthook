import Product from './Components/Product';
import Todolist from './Components/Todolist';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './Components/Main';
import Wheather from './Components/Wheather';

function App() {
  return (
    <>
   <Router>
     <Switch>
          <Route path="/todolist">
            <Todolist/>
          </Route>
          <Route path="/product">
            <Product />
          </Route>
          <Route path="/wheather">
            <Wheather />
          </Route>
          <Route path="/">
            <Todolist />
          </Route>
        </Switch>
   </Router>
   </>
  );
}

export default App;
