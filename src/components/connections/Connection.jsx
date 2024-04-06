import React from "react";

export default function Connection({ id, name, interests }) {
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
        <button className="profile-button">Block</button>
      </div>
    </div>
  );
}
