import React, { useState } from "react";
import "../styles/FriendFinder.css"; // Assuming you have a CSS file for styling
import { gamesData } from "../games/games";
import { fetchData } from "../utils/apiUtils";
import Connection from "./Connection";
import { connections } from "./data";

const FriendFinder = () => {
  const [filter, setFilter] = useState("");
  const [radius, setradius] = useState("");
  const [results, setResults] = useState([]); // Assuming you will populate this with the search results
  const userId = localStorage.getItem("userId");

  const handleSearch = () => {
    console.log(filter);
    fetchData("http://localhost:8080/user/matches", {}, "POST", {
      gameId: filter,
      radius: isNaN(parseInt(radius)) ? 0 : parseInt(radius),
      userId: userId,
    })
      .then((data) => {
        console.log("Result :", data);
        setResults(data);
      })
      .catch((error) => {
        console.log("Error checking", error);
      });
  };

  return (
    <div className="friend-finder">
      <div className="make-friends">
        <h2 className="make-friends-text">Make Friends</h2>
      </div>
      <div className="filter-row">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="">Select Game</option>
          {gamesData.map((game) => (
            <option key={game.game_id} value={game.game_id}>
              {game.game_name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={radius}
          onChange={(e) => setradius(e.target.value)}
          placeholder="Enter Distance"
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      <div className="results">
        {/* Display results as profiles */}
        {results.map((result) => (
          <Connection
            key={result.id}
            id={result.userId}
            name={result.username}
            interests={result.matchedSkill}
            isMatch
          />
        ))}
      </div>
    </div>
  );
};

export default FriendFinder;
