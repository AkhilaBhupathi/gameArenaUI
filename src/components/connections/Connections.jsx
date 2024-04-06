import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/apiUtils";
import Profile from "./Connection";
import { connections } from "./data";
import "../styles/connections.css";

export default function Layout() {
  const [connections, setConnections] = useState([]);
  const userId = localStorage.getItem("userId");
  useEffect(() => {
    fetchData(`http://localhost:8080/user/connections?userId=${userId}`)
      .then((data) => {
        setConnections(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <div className="connections-container">
      {connections.map((connection) => (
        <Profile key={connection} id={connection} name={connection} />
      ))}
    </div>
  );
}
