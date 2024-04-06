import React, { useState, useEffect } from "react";
import "../styles/Game.css"; // Import CSS for styling

const MonkeyWhackBlitz = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60); // Timer set to 60 seconds initially
  const [showSubmit, setShowSubmit] = useState(false);
  const [monkeyPosition, setMonkeyPosition] = useState({ x: -1, y: -1 }); // Initial position outside the grid

  useEffect(() => {
    const interval = setInterval(() => {
      // Decrement timer every second
      setTimer((prevTimer) => prevTimer - 1);
    }, 1100); // Change timer every second

    // Clear interval and reset timer when it reaches 0
    if (timer === 0) {
      clearInterval(interval);
      setShowSubmit(true);
    }

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [timer]); // Re-run effect when timer changes

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random coordinates for the monkey's position
      const newX = Math.floor(Math.random() * 5);
      const newY = Math.floor(Math.random() * 5);
      setMonkeyPosition({ x: newX, y: newY });
    }, 1000); // Change monkey position every second

    // Clear interval and reset monkey position when timer reaches 0
    if (timer === 0) {
      clearInterval(interval);
      setMonkeyPosition({ x: -1, y: -1 });
    }

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [timer]); // Re-run effect when timer changes

  const handleHitMonkey = (x, y) => {
    // If the user hits the monkey, increase the score by 10
    if (x === monkeyPosition.x && y === monkeyPosition.y) {
      setScore(score + 10);
      // Move monkey to an invalid position so it doesn't pop up again until next interval
      setMonkeyPosition({ x: -1, y: -1 });
    }
  };

  return (
    <div className="monkey-whack-blitz-container">
      <h1>Monkey Whack Blitz</h1>
      <div className="timer">Timer: {timer}s</div> {/* Display timer */}
      <div className="game-board">
        {[...Array(5)].map((_, y) => (
          <div key={y} className="column">
            {[...Array(5)].map((_, x) => (
              <div
                key={`${x}-${y}`}
                className={`cell ${
                  x === monkeyPosition.x && y === monkeyPosition.y
                    ? "monkey"
                    : ""
                }`}
                onClick={() => handleHitMonkey(x, y)}
              >
                {x === monkeyPosition.x && y === monkeyPosition.y && (
                  <img
                    src="images/monkey.png"
                    alt="Monkey"
                    className="monkey-image"
                  />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="score">Score: {score}</div>
      {showSubmit && <button className="score-button">Submit</button>}
    </div>
  );
};

export default MonkeyWhackBlitz;
