import React from "react";
import "../App.css";
import "../styles/Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Preuve from "./Preuve";

function Home() {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="presentation">
          <h1>Portfolio</h1>
          <h2>Jessim</h2>
          <p>
            Bonjour, je m'appelle Jessim Laib et je suis en BTS SIO option SLAM,
            une formation en deux ans axée sur le développement d’applications.
            J’y apprends à analyser les besoins des utilisateurs, développer des
            logiciels, gérer des bases de données et utiliser des langages comme
            HTML, CSS, JavaScript, PHP ou Python. Ce BTS forme des techniciens
            capables de créer des solutions numériques pour les entreprises,
            avec des bases en cybersécurité et en gestion de projet. À la fin,
            je pourrai travailler comme développeur ou poursuivre mes études en
            informatique.
          </p>
        </div>

        <p className="responsive">Version téléphone en travaux ;)</p>
      </main>
      <Preuve />
      <Footer />
    </div>
  );
}

export default Home;
