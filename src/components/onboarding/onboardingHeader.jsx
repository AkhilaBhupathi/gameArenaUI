import React from "react";

const OnboardingHeader = () => {
  return (
    <div className="website-name flex items-center mt-3">
      <img
        src="images/gameArena.png"
        alt="GamesArena Logo"
        className="h-10 mr-2"
      />
      <h1 className="text-4xl font-bold text-teal-600 tracking-wide">
        Game<span className="text-yellow-400">Arena</span>
      </h1>
    </div>
  );
};

export default OnboardingHeader;
