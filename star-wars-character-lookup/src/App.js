import React, { useState } from "react";
import logo from "./darth-vader-svgrepo-com.svg";
import CharacterList from "./components/CharacterList/CharacterList";
import CharacterDetail from "./components/CharacterDetail/CharacterDetail";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("list");
  const [selectedCharacterUrl, setSelectedCharacterUrl] = useState(null);
  const [characterPage, setCharacterPage] = useState(1);

  const navigateToCharacter = (url) => {
    setSelectedCharacterUrl(url);
    setCurrentPage("detail");
  };

  const navigateToList = () => {
    setCurrentPage("list");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Star Wars Database</h1>
        <h2>
          A list of people in Star Wars universe. Data sourced from{" "}
          <a href="https://swapi.dev">SWAPI</a>. View the source code in{" "}
          <a href="https://github.com/azayrahmad/FlexiDev-StarWars-Database">
            GitHub
          </a>
          .
        </h2>
      </header>
      <main>
        {currentPage === "list" ? (
          <CharacterList
            onCharacterSelect={navigateToCharacter}
            currentPage={characterPage}
            setCharacterPage={setCharacterPage}
          />
        ) : (
          <CharacterDetail
            characterUrl={selectedCharacterUrl}
            onBackClick={navigateToList}
          />
        )}
      </main>
    </div>
  );
}

export default App;
