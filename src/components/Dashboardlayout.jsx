import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";

const Dashboardlayout = ({ title, children }) => {
  return (
    <div className="flex">
      <Sidenav />
      <div style={{ flexGrow: 1 }}>
        <Topnav title={title} />
        <div className="w-[70rem] m-6">{children}</div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
