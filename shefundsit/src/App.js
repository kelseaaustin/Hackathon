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
import FinancialQuiz from "./FinancialQuiz"; // Import your FinancialQuiz component

function App() {
  const titles = ["Funds", "Invests", "Poops"]; // Add your titles here
  const pages = ["She Learns It", "She Budgets It"];
  const duration = 3000;

  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#ff8b94",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* Set the background color to a pink shade */}
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        {/* Set the background color to black */}
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
                color: "#fff", // Set the text color to white
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
              {/* Set the button background color to black */}
              Take the Quiz
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#000", mt: 2 }}>
              {/* Set the button background color to black */}
              Sign Up
            </Button>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
