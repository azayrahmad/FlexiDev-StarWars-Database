import logo from "./logo.svg";
import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("list");
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const navigateToCharacter = (id) => {
    setSelectedCharacterId(id);
    setCurrentPage("detail");
  };

  const navigateToList = () => {
    setCurrentPage("list");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Star Wars Character Lookup</h1>
      </header>
      <main>
        {currentPage === "list" ? (
          <CharacterList onCharacterSelect={navigateToCharacter} />
        ) : (
          <CharacterDetail
            characterId={selectedCharacterId}
            onBackClick={navigateToList}
          />
        )}
      </main>
    </div>
  );
}

export default App;
