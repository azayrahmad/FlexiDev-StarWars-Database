import React from "react";

const CharacterInfo = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
    </div>
  );
};

export default CharacterInfo;
