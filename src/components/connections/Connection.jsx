import React, { useState } from "react";
import "../styles/connections.css";
import { fetchData } from "../utils/apiUtils";

export default function Connection({ id, name, interests, isMatch }) {
  const [isButtonInteracted, setIsButtonInteracted] = useState(false);
  const userId = localStorage.getItem("userId");

  const handleButton = () => {
    fetchData(
      `http://localhost:8080/user/connect?currUserId=${userId}&connectedUserId=${id}`,
      {},
      "POST",
      {}
    )
      .then((data) => {
        console.log("Result :", data);
      })
      .catch((error) => {
        console.log("Error checking", error);
      });
    setIsButtonInteracted(true);
  };

  return (
    <div className="profile">
      <div className="profile-content">
        <img
          className="profile-avatar"
          src="images/prf.jpeg"
          alt={`${name} avatar`}
        />
        <div className="profile-details">
          <h2>{name}</h2>
        </div>
        {isMatch &&
          (isButtonInteracted ? (
            <button className="profile-button-disable">
              {!isMatch ? "" : "Connected"}
            </button>
          ) : (
            <button className="profile-button" onClick={handleButton}>
              {!isMatch ? "" : "Connect"}
            </button>
          ))}
      </div>
    </div>
  );
}
