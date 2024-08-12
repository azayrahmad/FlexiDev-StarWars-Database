import React from "react";
import AdditionalInfoList from "./CharacterAdditionalInfoList";

const CharacterAdditionalInfo = ({ additionalInfo }) => {
  return (
    <div>
      <AdditionalInfoList title="Films" items={additionalInfo.films} />
      <AdditionalInfoList title="Species" items={additionalInfo.species} />
      <AdditionalInfoList title="Starships" items={additionalInfo.starships} />
      <AdditionalInfoList title="Vehicles" items={additionalInfo.vehicles} />
    </div>
  );
};

export default CharacterAdditionalInfo;
