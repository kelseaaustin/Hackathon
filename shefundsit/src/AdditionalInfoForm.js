import React, { useState } from "react";
import axios from "axios"; // Import Axios for making API requests


function AdditionalInfoForm({ username }) {
  const [additionalInfo, setAdditionalInfo] = useState({
    email: "",
    name: "",
    age: "",
    credit_score: "",
    assessment_score: "",
    savings: "",
    income: "",
    education_level: "",
    employment_status: "",
    marital_status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdditionalInfo({
      ...additionalInfo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/update-user", {
        username,
        ...additionalInfo,
      });

      if (response.status === 200) {
        // Update was successful
        // You can handle success here (e.g., show a success message)
        console.log("Additional information submitted successfully");
      } else {
        // Update failed
        // You can handle failure here (e.g., show an error message)
        console.error("Additional information submission failed!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h2>Provide More Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={additionalInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Email:</label>
          <input
            type="text"
            name="email"
            value={additionalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={additionalInfo.age}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Credit Score:</label>
          <input
            type="text"
            name="credit_score"
            value={additionalInfo.credit_score}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Assessment Score:</label>
          <input
            type="text"
            name="assessment_score"
            value={additionalInfo.assessment_score}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Savings:</label>
          <input
            type="text"
            name="savings"
            value={additionalInfo.savings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Income:</label>
          <input
            type="text"
            name="income"
            value={additionalInfo.income}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Education Level:</label>
          <input
            type="text"
            name="education_level"
            value={additionalInfo.education_level}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Employment Status:</label>
          <input
            type="text"
            name="employment_status"
            value={additionalInfo.employment_status}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Marital Status:</label>
          <input
            type="text"
            name="marital_status"
            value={additionalInfo.marital_status}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdditionalInfoForm;
