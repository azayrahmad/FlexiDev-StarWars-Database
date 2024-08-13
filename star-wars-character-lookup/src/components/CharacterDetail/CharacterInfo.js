import React from "react";
import useFetch from "../../hooks/useFetch";

const CharacterInfo = ({ character }) => {
  const { data: homeworldData, loading, error } = useFetch(character.homeworld);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!homeworldData) return <div>Homeworld not found</div>;

  return (
    <div>
      <h2>{character.name}</h2>
      <p>
        <small>
          <b>Created:</b> {new Date(character.created).toDateString()},{" "}
          <b>Edited:</b> {new Date(character.edited).toDateString()}
        </small>
      </p>
      <p>
        <b>Birth Year:</b> {character.birth_year}
      </p>
      <p>
        <b>Gender:</b> {character.gender}
      </p>
      <p>
        <b>Height:</b> {character.height} cm
      </p>
      <p>
        <b>Mass:</b> {character.mass} kg
      </p>
      <p>
        <b>Hair Color:</b> {character.hair_color}
      </p>
      <p>
        <b>Skin Color:</b> {character.skin_color}
      </p>
      <p>
        <b>Eye Color:</b> {character.eye_color}
      </p>
      <p>
        <b>Homeworld:</b> {homeworldData.name}
      </p>
    </div>
  );
};

export default CharacterInfo;
