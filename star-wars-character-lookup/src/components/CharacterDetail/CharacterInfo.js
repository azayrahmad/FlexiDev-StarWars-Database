import React from "react";

const CharacterInfo = ({ character }) => {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      {/* <p>Homeworld: {character.homeworld}</p>
      <p>Created: {character.created}</p>
      <p>Edited: {character.edited}</p> */}
    </div>
  );
};

export default CharacterInfo;
