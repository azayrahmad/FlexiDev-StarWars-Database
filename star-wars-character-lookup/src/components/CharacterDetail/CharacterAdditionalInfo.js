import React from "react";

const CharacterAdditionalInfo = ({ additionalInfo }) => {
  return (
    <div>
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

export default CharacterAdditionalInfo;
