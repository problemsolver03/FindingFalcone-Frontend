import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './components/Home';
import Succcess from './components/Success'
class App extends React.Component {
  state = {
    mobile:false
  }
  toggleMenu = () =>{ 
    let mobile = !this.state.mobile;
    this.setState({mobile})
  } 
  render() { 
  return (
    <div className="container-fluid primaryBackground">
       

      <Router>
        <Navbar toggleMenu={this.toggleMenu} mobile={this.state.mobile}/>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/success" component={Succcess} exact/>
         
         
        </Switch>

    </Router>
    </div>
  );
  }
}

export default App;
