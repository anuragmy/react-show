import React from "react";
import { Drawer, ListItem, List } from "@material-ui/core";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("featured")}>
          Event Starts In
        </ListItem>

        <ListItem button onClick={() => console.log("featured")}>
          View NFO
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => console.log("featured")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
