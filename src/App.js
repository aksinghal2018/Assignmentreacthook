import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Noresponse from './Components/Noresponse';
import Aboutus from './Components/Aboutus';
import Dashboard from './Components/Dashboard';
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       status:false
    }
  }
  componentDidMount(){
    if(localStorage.getItem("userdata")!=undefined){
      this.setState({status:true});
    }
  }
  render(){
    const dashboard=<Route path="/dashboard" exact>
    <Dashboard />
  </Route>
  return (
    <div className="App">
     <Router>
     
        <Switch>
        <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/aboutus" exact>
            <Aboutus />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          
          {(this.state.status==true)?dashboard:<></>
          }
          <Route>
            <Noresponse />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}
}

export default App;
