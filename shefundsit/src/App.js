import React from "react";
import "./App.css";
import Header from "./Header";
import FadingTitle from "./FadingTitle";
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import Container from '@mui/material/Container'

function App() {
  const titles = ["Funds", "Invests", "Poops"]; // Add your titles here
  const pages = ["She Learns It", "She Budgets It"];
  const duration = 3000;

  return (
    <div className="App">
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PregnantWomanIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SHEFUNDSIT
          </Typography>
          <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
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
      <main>
        <FadingTitle titles={titles} duration={duration} />
        <Button 
          variant="contained">
          onClick={onClick}
            Sign up
          </Button>
      </main>
    </div>
  );
}

export default App;
