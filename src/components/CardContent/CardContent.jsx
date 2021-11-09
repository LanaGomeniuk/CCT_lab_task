import React from "react";

const CardContent = ({ content }) => {
  return (
    <ul>
      {content.map((text, index) => (
        <li key={index}>{text}</li>
      ))}
    </ul>
  );
};

export default CardContent;
