import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mb-0">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="text-sm">Powered by</span>
        <img
          src="images/gameskraft.png"
          alt="GamesArena Logo"
          className="h-8 mr-2"
        />
      </div>
    </footer>
  );
};

export default Footer;
