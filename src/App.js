import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Jumbotron from "./components/Jumbotron.js";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
