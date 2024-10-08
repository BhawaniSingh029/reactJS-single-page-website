// import React from "react";

export const formValidation = (formData) => {
  const errors = {};

  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required";
  }
  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required";
  }
  if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }
  if (!/^\d{10}$/.test(formData.phoneNo)) {
    errors.phoneNo = "Phone Number must be 10 digits";
  }
  if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;
};
