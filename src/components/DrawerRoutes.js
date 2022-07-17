import React from "react";
import { routes } from "../constants";
const Drawerroutes = (props) => {
  return (
    <div className="drawer-routes-container">
      {routes.map((route, i) => (
        <div
          className="drawer-route"
          key={i}
          onClick={() => {
            console.log(props.history);
            // props.history.push(route.path.replaceAll(" ", "-").toLowerCase());
            // props?.closeDrawer();
          }}
        >
          {route.pathName}
        </div>
      ))}
    </div>
  );
};

export default Drawerroutes;