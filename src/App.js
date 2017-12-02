import React, { Component } from 'react';
//Import routing
import { BrowserRouter as Router, Route } from "react-router-dom";
//Import components
import Navbar from "./components/Navbar";
import Panel from "./components/Panel";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
  <div>
    <Navbar />
      {/* <Wrapper> */}
            <Route exact path="/" component="Home"/>
              <Route exact path="/saved" component="Saved"/>
                <Route exact path="/find" component="Find"/>
      {/* </Wrapper> */}
    <Footer/>
  </div>
</Router>
            );
  }
}

export default App;
