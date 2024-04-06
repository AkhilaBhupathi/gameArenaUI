import React from "react";
import Connections from "./Connections";
import Matches from "./Matches";

export default function Layout() {
  return (
    <>
      <div className="connection-container">
        <div className="leftSection">
          <Connections />
        </div>
        <div className="rightSection">
          <Matches />
        </div>
      </div>
    </>
  );
}
