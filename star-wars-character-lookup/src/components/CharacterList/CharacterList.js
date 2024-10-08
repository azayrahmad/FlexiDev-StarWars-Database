import React from "react";
import useFetch from "../../hooks/useFetch";
import CharacterItem from "./CharacterItem";

const CharacterList = ({
  onCharacterSelect,
  currentPage,
  setCharacterPage,
}) => {
  const { data, loading, error } = useFetch(
    `https://swapi.dev/api/people/?page=${currentPage}`
  );

  if (loading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  if (error)
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );

  const handlePrevPage = () => {
    setCharacterPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCharacterPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(data.count / 10))
    );
  };

  return (
    <div className="character-list">
      <ul>
        {data.results.map((character, index) => (
          <CharacterItem
            key={index}
            character={character}
            onCharacterSelect={onCharacterSelect}
          />
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(data.count / 10)}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(data.count / 10)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
