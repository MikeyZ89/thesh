import React from "react";
import "./App.css";
import P1 from "../src/assets/img/team/MZ.jpg";
import P2 from "../src/assets/img/team/AK.jpg";
import Header from "./components/Header";
import Publications from "./components/Publications";
import Contact from "./components/Contact";

function App() {
  const publicationLinks = [
    {
      image: P1,
      title: "Mikey Zlotkowski",
      caption: "Singer-Songwriter/Guitarist",
      instagram: "https://www.instagram.com/thesh_mikey/",
      contact: "https://www.tappy.tech/mikez",
    },
    {
      image: P2,
      title: "Andrew Keiser",
      caption: "Producer/Drummer",
      instagram: "https://www.instagram.com/andrewkeiser_/",
      venmo: "#https://www.tappy.tech/AK15366",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Publications publicationLinks={publicationLinks}></Publications>
      <Contact />
    </div>
  );
}

export default App;
