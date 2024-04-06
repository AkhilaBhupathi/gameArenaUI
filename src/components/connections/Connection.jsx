import React, { useState } from "react";
import "../styles/connections.css";

export default function Connection({ id, name, interests, isMatch }) {
  const [isButtonInteracted, setIsButtonInteracted] = useState(false);

  const handleButton = () => {
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
          <p>Interests: {interests}</p>
        </div>
        {isButtonInteracted ? (
          <button className="profile-button-disable">
            {!isMatch ? "Blocked" : "Connected"}
          </button>
        ) : (
          <button className="profile-button" onClick={handleButton}>
            {!isMatch ? "Block" : "Connect"}
          </button>
        )}
      </div>
    </div>
  );
}
