import React from "react";
import { Drawer, ListItem, List } from "@material-ui/core";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      Draweer
    </Drawer>
  );
};

export default SideDrawer;
