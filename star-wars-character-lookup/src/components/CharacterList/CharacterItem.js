import React from "react";

const CharacterItem = ({ character, onCharacterSelect }) => {
  return (
    <li>
      <button onClick={() => onCharacterSelect(character.url)}>
        {character.name}
      </button>
    </li>
  );
};

export default CharacterItem;
