import React, { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom';

function MyStatus() {
  const [sliderValue, setSliderValue] = useState(0); // State to hold the slider value
  const [isLoading, setIsLoading] = useState(true); // State to manage loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Define your API endpoint URL
    const apiUrl = '/api/status'; // Replace with your actual API endpoint

    // Use fetch to make a GET request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Check if the data contains the expected field (e.g., 'value')
        if (data && data.value !== undefined) {
          setSliderValue(data.value);
        } else {
          // Handle the case where data is missing or incomplete
          setSliderValue(0); // Set a default value (or any other desired behavior)
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
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
    <div>
      <Typography variant="h5" gutterBottom>
        My Status
      </Typography>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>How Financially Literate Am I?: {sliderValue}</p>
          <Slider
            value={sliderValue}
            onChange={handleSliderChange}
            min={0}
            max={100}
            step={1}
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
          >
            Increase Your Literacy
          </Button>
        </div>
      )}
    </div>
  );
}

export default MyStatus;