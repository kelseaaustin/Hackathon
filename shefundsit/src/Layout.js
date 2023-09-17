import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div style={{ backgroundColor: '#ff8b94' }}>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Container
          maxWidth="xl"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          {/* Your AppBar content */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Add your AppBar content here */}
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Button
                variant="text"
                sx={{ color: 'white', marginRight: 2 }}
              >
                Home
              </Button>
            </Link>
          </div>
          {/* Add your login and signup buttons here */}
        </Container>
      </AppBar>

      {/* Content of the current page */}
      {children}
    </div>
  );
}

export default Layout;