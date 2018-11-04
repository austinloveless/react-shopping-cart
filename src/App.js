import React, { Component } from "react";
import "./App.css";
import "./Landing.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import SplashPage from "./components/SplashPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={SplashPage} />
          <Route path="/register" component={Register} />
          <Route path="/signin" component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
