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
import FinancialQuiz from "./FinancialQuiz";
import SignUpForm from "./SignUp";
import SignUpPage from "./SignUpPage"; // Import your SignUpPage component
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  const titles = ["Funds", "Invests", "Finances"];
  const pages = ["She Learns It", "She Budgets It"];
  const duration = 3000;

  const [quizStarted, setQuizStarted] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const showSignupForm = () => {
    setShowSignup(true);
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
                <Container maxWidth="xl">
                  <Toolbar disableGutters>
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
                        color: "#fff",
                        textDecoration: "none",
                      }}
                    >
                      SHEFUNDSIT
                    </Typography>
                    <Menu
                      id="menu-appbar"
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                      sx={{
                        display: { xs: "block", md: "none" },
                      }}
                    >
                      {pages.map((page) => (
                        <MenuItem key={page}>
                          <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </Toolbar>
                </Container>
              </AppBar>
              <main
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {quizStarted ? (
                  <FinancialQuiz />
                ) : (
                  <>
                    <FadingTitle titles={titles} duration={duration} />
                    <Button
                      variant="contained"
                      onClick={startQuiz}
                      sx={{ backgroundColor: "#000", mt: 2 }}
                    >
                      Take the Quiz
                    </Button>
                    <Link to="/signup">
                      <Button
                        variant="contained"
                        onClick={showSignupForm}
                        sx={{ backgroundColor: "#000", mt: 2 }}
                        className="signup-button" // Add this class
                      >
                        Sign Up
                      </Button>
                    </Link>
                    {/* {showSignup && <SignUpForm />} */}
                  </>
                )}
              </main>
            </div>
          }
        />
        <Route path="/signup" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
