import React, { useState } from "react";
import "./form.css";

const FormVal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState(false);

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must bhi more than 6 digit";
    }
    if (!confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword =
        "ConfirmPassword doesn't match! Please try again.";
    }

    if (!age) {
      errors.age = "Age is required";
    } else if (isNaN(age) || age < 18) {
      errors.age = "Age must bhi a number and must be 18";
    }

    if (!gender) {
      errors.gender = "gender is required";
    }
    console.log(errors);
    return errors;
  };

  function handleSubmit(e) {
    e.preventDefault();

    const validatationErrors = validateForm();

    if (Object.keys(validatationErrors).length > 0) {
      setErrors(validatationErrors);
    } else {
      console.log("Form submitted");
    }
  }

  return (
    <div>
      <div className="container">
        <h1>Form Validation</h1>
        <form action="" onSubmit={handleSubmit} className="data-form">
          <div className="form-label">
            <label htmlFor="">Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name}
          </div>
          <div className="form-label">
            <label>Email</label>{" "}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            {errors.email}
          </div>
          <div className="form-label">
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errors.password}
          </div>
          <div className="form-label">
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            {errors.confirmPassword}
          </div>
          <div className="form-label">
            <label>Age</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            {errors.age}
          </div>
          <div className="form-label">
            <label>Gender</label>
            <select
              value={gender}
              name=""
              id=""
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormVal;
