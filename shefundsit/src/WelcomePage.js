import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./welcome.css"; // Import the CSS module
import AdditionalInfoForm from "./AdditionalInfoForm";

const WelcomePage = ({ username }) => {
  const location = useLocation();
  const { username: welcomeUsername } = location.state;

  // State to track whether the additional information form is visible
  const [showAdditionalInfoForm, setShowAdditionalInfoForm] = useState(false);

  const handleShowAdditionalInfoForm = () => {
    setShowAdditionalInfoForm(true);
  };

  return (
    <div className="pinkBackground">
      <div className="container">
        <div className="welcomeContainer">
          <h1>Welcome, {welcomeUsername}!</h1>
          <p>This is your dashboard.</p>
        </div>
        <div className="additionalInfoContainer">
          {showAdditionalInfoForm ? (
            <AdditionalInfoForm />
          ) : (
            <div>
              <button onClick={handleShowAdditionalInfoForm}>
                Provide More Information
              </button>
              <button>Submit</button> {/* Add this button */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
