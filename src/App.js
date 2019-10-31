import React, { Component } from "react";
import Header from "./components/headerandfooter/Header";
import "./resources/styles.css";

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
      </div>
    );
  }
}

export default App;
