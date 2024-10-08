import React from "react";

function Sections({
  title,
  content,
  showContent = false,
  children,
  secClassName,
  showSecClass = false,
  cardClassName,
  showCardClass = false,
  cardChildClass,
  showCardChildClass = false,
  imgSrc,
}) {
  return (
    <section className={`section ${showSecClass ? secClassName : ""}`}>
      <h1>{title}</h1>
      {showContent && <p>{content}</p>}

      {showCardChildClass ? (
        <div className={`cards ${showCardClass ? cardClassName : ""}`}>
          <div className={`cards-child ${cardChildClass}`}>{children}</div>
          <div className="cards-img">
            <img src={imgSrc} alt="" />
          </div>
        </div>
      ) : (
        <div className={`cards ${showCardClass ? cardClassName : ""}`}>
          {children}
        </div>
      )}
    </section>
  );
}

export default Sections;
