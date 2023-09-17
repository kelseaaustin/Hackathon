import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import FadingTitle from "./FadingTitle";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import PregnantWomanIcon from "@mui/icons-material/PregnantWoman";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import SubTabs from './SubTabs.js';
import FinancialQuiz from "./FinancialQuiz";
import MyStatus from './MyStatus';
import SignUpForm from "./SignUp";
import SignUpPage from "./SignUpPage"; // Import your SignUpPage component
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {

  const titles = ["Funds", "Invests", "Finances"];
  const pages = ["She Learns It", "She Budgets It"];
  const subTabLabels = [
    ["My Journey", "My Status"],
    ["My Budget", "My Savings"],
  ];
  const duration = 3000;

  const [mainTabValue, setMainTabValue] = useState(-1);
  const [subTabValue, setSubTabValue] = useState(-1);

  const handleMainTabChange = (event, newValue) => {
    setMainTabValue(newValue);
    setSubTabValue(0);
  };

  const handleSubTabChange = (event, newValue) => {
    setSubTabValue(newValue);
  };

  // Define the content for each tab
  const tabContent = [
    "Content for She Learns It",
    "Content for She Budgets It"
  ];

  const [quizStarted, setQuizStarted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [bar, setBar] = useState(true);

  const startQuiz = () => {
    setQuizStarted(true);
    setBar(false);
  };

  const showSignupForm = () => {
    setShowSignup(true);
    setBar(false);
  };

  const titleStyle = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '10rem',
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
    <div
      className="App"
      style={{
        backgroundColor: "#ff8b94",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
        <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Container maxWidth="xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PregnantWomanIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#fff", // Set the text color to white
                textDecoration: "none",
              }}
            >
              SHEFUNDSIT
            </Typography>
            
            <Tabs value={mainTabValue} onChange={handleMainTabChange} sx={{
    '& .MuiTabs-indicator': {
      backgroundColor: 'white', // Change indicator color to white
    },
    '& .MuiTab-textColorInherit': {
      color: 'white', // Change tab text color to white
    },
    '& .Mui-selected': {
      color: 'pink', // Change selected tab text color to pink
    },
  }}>
            {/* Define your main tabs here */}
            <Tab label="She Learns It" sx={{ color: 'white' }}/>
            <Tab label="She Budgets It" sx={{ color: 'white' }}/>
          </Tabs>
          </div>
          </Container>
      </AppBar>
      {mainTabValue !== -1 && (
        <SubTabs
          value={subTabValue}
          handleChange={handleSubTabChange}
          subTabLabels={subTabLabels[mainTabValue]}
          sx={{
            '& .MuiTabs-indicator': {
              backgroundColor: 'white', // Change indicator color to white
            },
            '& .MuiTab-textColorInherit': {
              color: 'white', // Change tab text color to white
            },
            '& .Mui-selected': {
              color: 'pink', // Change selected tab text color to pink
            },
          }}
        />
      )}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ display: mainTabValue === 0 ? 'block' : 'none' }}>
          <p>Main Tab 1 Content</p>
          <div>
          {subTabValue === 0 && <p>Content for SubTab 1</p>} {/* Example content for SubTab 1 */}
          {subTabValue === 1 && <MyStatus />} {/* Render MyStatus component when subTabValue is 0 */}
          </div>
        </div>
        <div style={{ display: mainTabValue === 1 ? 'block' : 'none' }}>
          <p>Main Tab 2 Content</p>
          <div>
          {subTabValue === 0 && <p>Content for SubTab 2</p>} {/* Example content for SubTab 2 */}
          {subTabValue === 1 && <p>Content for SubTab 2</p>} {/* Example content for SubTab 2 */}
          </div>
        </div>
        {quizStarted ? (
          <FinancialQuiz />
        ) : (
          <>
            <div style={{ display: "flex", alignItems: "center" }}>
            <p style={titleStyle}>She</p>
            <FadingTitle titles={titles} duration={duration} />
            <p style={titleStyle}>It</p>
            </div>
            <div>
  <Button
    variant="contained"
    onClick={startQuiz}
    sx={{
      backgroundColor: "#000",
      mt: 2,
      fontSize: '1rem', // Adjust the font size as needed
      padding: '12px 24px', // Adjust the padding as needed
    }}
  >
    Take the Quiz
  </Button>
  <Link to="/signup">
    <Button
    variant="contained"
    onClick={showSignupForm}
    sx={{ backgroundColor: "#000", mt: 2, fontSize: '1rem', // Adjust the font size as needed
    padding: '12px 24px',
    marginLeft: '10px',
   }}
    className="signup-button" // Add this class
  >
    Sign Up
  </Button>
  </Link>
</div>
          </>
        )}
        
      </main>
      {bar && <div
        style={{
          backgroundColor: "purple", // Change the color as needed
          height: "150px", // Adjust the height as needed
          display: "flex",
    alignItems: "center",
    justifyContent: "center",
        }}
      >
        <p style={{ color: "white",
        fontSize: "1.5rem",
        padding: "100px",
        fontFamily: 'Montserrat, sans-serif' }}>
    Want to see how financially literate you are?
  </p>
      </div>}
      </div>
  }
  />
  <Route path="/signup" element={<SignUpForm />} />
</Routes>
{bar && <div

        style={{
          backgroundColor: "purple", // Change the color as needed
          height: "60px", // Adjust the height as needed
          display: "flex",
          justifyContent: "center",
        }}
      >
        <p style={{ color: "white",
        fontSize: "1.5rem",
        fontFamily: 'Montserrat, sans-serif' }}>
    Find out {" "}
    <span
      onClick={startQuiz}
      style={{
        cursor: "pointer",
        textDecoration: "underline",
        color: "inherit",
      }}
    >
      here
    </span>
  </p>
      </div>}
</Router>
);
}
export default App;
