import React from "react";

function FirstSection({title,buttonText}) {
  return (
    <div className="first-section">
      <h1>{title}</h1>
      <button type="button">{buttonText}</button>
    </div>
  );
}

export default FirstSection;
