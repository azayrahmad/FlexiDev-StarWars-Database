import logo from "./logo.svg";
import React, { useState } from "react";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("list");
  const [selectedCharacterUrl, setSelectedCharacterUrl] = useState(null);

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
        <h1>Star Wars People Lookup</h1>
      </header>
      <main>
        {currentPage === "list" ? (
          <CharacterList onCharacterSelect={navigateToCharacter} />
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
