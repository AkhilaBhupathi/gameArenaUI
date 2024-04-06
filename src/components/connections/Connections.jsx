import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/apiUtils";
import Profile from "./Connection";
import { connections } from "./data";
import "../styles/connections.css";

export default function Layout() {
  //   const [connections, setConnections] = useState([]);
  //   useEffect(() => {
  //     fetchData("http://localhost:8080/connections")
  //       .then((response) => response.json())
  //       .then((data) => setConnections(data));
  //   }, []);

  return (
    <div className="connections-container">
      {connections.map((connection) => (
        <Profile
          key={connection.id}
          id={connection.id}
          name={connection.name}
          interests={connection.interests}
        />
      ))}
    </div>
  );
}
