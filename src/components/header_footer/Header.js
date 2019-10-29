import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Header extends Component {
  render() {
    return (
      <div>
        <AppBar
          position="left"
          style={{
            backgroungColor: "#2f2f2f",
            boxShadow: "none",
            padding: "10px 0"
          }}
        >
          Header
          <ToolBar></ToolBar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
