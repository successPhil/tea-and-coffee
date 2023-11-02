import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const menuItems = [
    {
      label: 'Tea',
      path: "tea"
    },
    {
      label: 'Coffee',
      path: 'coffee',
    },
    {
      label: 'About',
      path: 'about',
    },
    {
      label: 'Contact Us',
      path: 'contact'
    }
  ];

export default function ResponsiveAppBar({handleLogout}) {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
            <Box sx={{flexGrow: 1, display: { xs: 'none', md: 'flex'}, justifyContent: 'space-between'}}>
            {menuItems.map((buttonInfo) => (
                <Link to={buttonInfo.path} key={`link${buttonInfo.label}`} style={{ textDecoration: 'none' }}>
                    <Button
                        key={`button${buttonInfo.label}`}
                        sx={{
                            mx:3,
                            my: 2,
                            display: 'block',
                            fontFamily: 'Baloo 2, sans-serif',
                            fontSize: '2.0rem',
                            color: '#cacfcd', 
                          }}
                    >
                    {buttonInfo.label}
                    </Button>
              </Link>
             
           
            ))}
             <Link to="/" id="logout" style={{ textDecoration: 'none' }} >
              <Button onClick={handleLogout}
              variant="outlined"
              color='secondary'
              sx={{
                mx:3,
                my: 2,
                display: 'block',
              }}>
                    Logout
                    </Button>
          </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}