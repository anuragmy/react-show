import React, { Component } from "react";
import { AppBar, Toolbar, MenuItem, IconButton } from "@material-ui/core";
import SideDrawer from "./SideDrawer";

export default class Header extends Component {
  state = {
    drawerOpen: false
  };

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  };

  render() {
    return (
      <div>
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "#2f2f2f",
            padding: "10px 0",
            boxShadow: "none"
          }}
        >
          <Toolbar>
            <div className="header_logo">
              <div className="font_righteous header_logo_venue">The Venue</div>
              <div className="header_logo_title">Musical Events</div>
            </div>
            <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={() => this.toggleDrawer(true)}
            >
              <MenuItem />
            </IconButton>
            <SideDrawer
              open={this.state.drawerOpen}
              onClose={value => this.toggleDrawer(true)}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
