import React, { useState, useEffect } from "react";
import CharacterInfo from "./CharacterInfo";
import CharacterAdditionalInfo from "./CharacterAdditionalInfo";
import useFetch from "../../hooks/useFetch";

const CharacterDetail = ({ characterUrl, onBackClick }) => {
  const { data: character, loading, error } = useFetch(characterUrl);
  const [additionalInfo, setAdditionalInfo] = useState({
    films: [],
    species: [],
    starships: [],
    vehicles: [],
  });

  useEffect(() => {
    if (character) {
      const fetchAdditionalInfo = async () => {
        const categories = ["films", "species", "starships", "vehicles"];
        const promises = categories.map((category) =>
          Promise.all(
            character[category].map((url) =>
              fetch(url).then((res) => res.json())
            )
          )
        );

        try {
          const [films, species, starships, vehicles] = await Promise.all(
            promises
          );
          setAdditionalInfo({ films, species, starships, vehicles });
        } catch (err) {
          console.error("Error fetching additional info:", err);
        }
      };

      fetchAdditionalInfo();
    }
  }, [character]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!character) return <div>Character not found</div>;

  return (
    <div className="character-detail">
      <button onClick={onBackClick}>Back to List</button>
      <CharacterInfo character={character} />
      <CharacterAdditionalInfo additionalInfo={additionalInfo} />
    </div>
  );
};

export default CharacterDetail;
