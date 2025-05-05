import React from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";

function Projets() {
  return (
    <div>
      <Header />
      <main>
        <h1>Portfolio</h1>
        <h2>Jessim</h2>
        <p>Etudiant BTS SIO 2 Institution Des Chartreux Lyon1</p>
        <p className="responsive">Version téléphone en travaux ;)</p>
      </main>
      <Footer />
    </div>
  );
}

export default Projets;
