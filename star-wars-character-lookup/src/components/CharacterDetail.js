import React, { useState, useEffect } from "react";

const CharacterDetail = ({ characterUrl, onBackClick }) => {
  const [character, setCharacter] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState({
    films: [],
    species: [],
    starships: [],
    vehicles: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      try {
        const response = await fetch(characterUrl);
        if (!response.ok) {
          throw new Error("Failed to fetch character details");
        }
        const data = await response.json();
        setCharacter(data);
        await fetchAdditionalInfo(data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching character details");
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [characterUrl]);

  const fetchAdditionalInfo = async (characterData) => {
    const categories = ["films", "species", "starships", "vehicles"];
    const promises = categories.map((category) =>
      Promise.all(
        characterData[category].map((url) =>
          fetch(url).then((res) => res.json())
        )
      )
    );

    try {
      const [films, species, starships, vehicles] = await Promise.all(promises);
      setAdditionalInfo({ films, species, starships, vehicles });
    } catch (err) {
      console.error("Error fetching additional info:", err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <div className="character-detail">
      <button onClick={onBackClick}>Back to List</button>
      <h2>{character.name}</h2>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
      <p>Height: {character.height} cm</p>
      <p>Mass: {character.mass} kg</p>

      {additionalInfo.films.length > 0 && (
        <>
          <h3>Films</h3>
          <ul>
            {additionalInfo.films.map((film, index) => (
              <li key={index}>{film.title}</li>
            ))}
          </ul>
        </>
      )}

      {additionalInfo.species.length > 0 && (
        <>
          <h3>Species</h3>
          <ul>
            {additionalInfo.species.map((species, index) => (
              <li key={index}>{species.name}</li>
            ))}
          </ul>
        </>
      )}

      {additionalInfo.starships.length > 0 && (
        <>
          <h3>Starships</h3>
          <ul>
            {additionalInfo.starships.map((starship, index) => (
              <li key={index}>{starship.name}</li>
            ))}
          </ul>
        </>
      )}

      {additionalInfo.vehicles.length > 0 && (
        <>
          <h3>Vehicles</h3>
          <ul>
            {additionalInfo.vehicles.map((vehicle, index) => (
              <li key={index}>{vehicle.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CharacterDetail;
