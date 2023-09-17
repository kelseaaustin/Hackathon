import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center items horizontally
  justifyContent: 'center', // Center items vertically
  minHeight: '100vh', // Adjust the minHeight as needed
};

const buttonStyle = {
  marginTop: '16px', // Adjust the margin as needed
};

function MyStatus() {
  const [sliderValue, setSliderValue] = useState(0); // State to hold the slider value
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the assessment score from your Flask API
    async function fetchAssessmentScore(username) {
      try {
        const response = await fetch(`/api/assessment-score?username=${username}`);
        const data = await response.json();
        setSliderValue(data.assessment_score);
      } catch (error) {
        console.error('Error fetching assessment score:', error);
        // Handle the error appropriately
      }
    }

    // Replace 'JohnDoe' with the actual username you want to retrieve
    fetchAssessmentScore('JohnDoe');
  }, []);

  const handleSliderChange = (event, newValue) => {
    // Handle slider value changes (you can update your database here if needed)
    setSliderValue(newValue);
  };

  const handleIncreaseLiteracyClick = () => {
    // Navigate to the 'My Journey' subtab
    navigate('/my-journey');
  };

  return (
    <div style={containerStyle}>
      <Typography variant="h5" gutterBottom>
        My Status
      </Typography>
        <div>
          <p>How Financially Literate Am I?: {sliderValue}</p>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
            style={{ color: 'black' }}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `${value}%`}
            marks={[
                {
                  value: 0,
                  label: 'Beginner',
                },
                {
                  value: 50,
                  label: 'Intermediate',
                },
                {
                  value: 100,
                  label: 'Advanced',
                },
              ]}
          />
          <Button
            variant="contained"
            onClick={handleIncreaseLiteracyClick}
            sx={{ mt: 2 }}
            style={{ backgroundColor: 'black', color: 'white' }}
          >
            Increase Your Literacy
          </Button>
        </div>
    </div>
  );
}

export default MyStatus;