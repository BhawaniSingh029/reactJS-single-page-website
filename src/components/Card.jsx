import React, { useState } from "react";
import { formValidation } from "../hooks/formValidation";

function Card({
  title,
  text,
  showText = false,
  buttonText,
  showBtn = false,
  showFormBtn = false,
  cardClass,
  showCardClass = false,
  imgSrc,
  showImgSrc = false,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneno: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Formsubmitted successfully!", formData);
    }
  };

  return (
    <div className={`card ${showCardClass ? cardClass : ""}`}>
      {showImgSrc ? <img src={imgSrc} alt="" /> : ""}
      <h3>{title}</h3>
      {showText ? (
        <p>{text}</p>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <span className="form-block firstName">
              <input
                type="text"
                placeholder="First Name"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="position">{errors.firstName}</span>
              )}
            </span>

            <span className="form-block lastName">
              <input
                type="text"
                placeholder="Last Name"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="position">{errors.lastName}</span>
              )}
            </span>

            <span className="form-block email">
              <input
                type="email"
                placeholder="Email address"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="position">{errors.email}</span>}
            </span>

            <span className="form-block phoneNo">
              <input
                type="tel"
                placeholder="Phone Number"
                id="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
              />
              {errors.phoneNo && (
                <span className="position">{errors.phoneNo}</span>
              )}
            </span>

            <span className="form-block password">
              <input
                type="password"
                placeholder="Create password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <span className="position">{errors.password}</span>
              )}
            </span>
            {/* <input
              type="password"
              placeholder="Create password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            /> */}
            {showFormBtn ? <button>{buttonText}</button> : ""}
          </form>
        </>
      )}
      {showBtn ? <button>{buttonText}</button> : ""}
    </div>
  );
}

export default Card;
