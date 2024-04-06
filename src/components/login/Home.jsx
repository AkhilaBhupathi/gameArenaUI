import React from "react";
import "../styles/Home.css";
import GamesList from "../games/Layout";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <>
      <GamesList />
      <Footer />
    </>
  );
}
