import React, { Component } from "react";
import Header from "./components/headerandfooter/Header";
import "./resources/styles.css";
import Featured from "./components/featured";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          height: "1500px",
          backgroundColor: "cornflowerblue"
        }}
      >
        <Header />
        <Featured />
      </div>
    );
  }
}

export default App;
