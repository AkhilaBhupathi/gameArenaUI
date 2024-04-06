import React from "react";
import gamesData from "./data.json";
import "../styles/GamesList.css"; // Import your CSS file for styling
import { useNavigate } from "react-router-dom";

const GamesList = () => {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate("/play");
  };

  return (
    <div className="games-list">
      {gamesData.map((game, index) => (
        <div key={index} className="game-container">
          <div className="image-card">
            <img src={`images/${game.image}`} alt="Game" className="image" />
          </div>
          <div className="description-card">
            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <button className="play-button" onClick={handlePlay}>
              Play
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesList;
