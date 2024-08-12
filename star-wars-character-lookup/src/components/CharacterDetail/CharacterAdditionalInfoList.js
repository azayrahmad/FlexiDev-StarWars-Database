import React from "react";

const AdditionalInfoList = ({ title, items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name || item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdditionalInfoList;
