import React from "react";

function TopBackgroundSection({title,buttonText}) {
  return (
    <div className="background-section">
      <h1>{title}</h1>
      <button type="button">{buttonText}</button>
    </div>
  );
}

export default TopBackgroundSection;
