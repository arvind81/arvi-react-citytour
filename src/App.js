import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/navbar/navbar";
import Tourlist from "./Components/tour-list/index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    );
  }
}
export default App;
