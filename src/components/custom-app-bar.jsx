import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import inapam from '../assets/img/logo-inapam.png';

const pages = [{ name: 'Registro', link: '/' }, { name: 'Acceder', link: '/access' }];

const CustomAppBar = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters >

          <a href="/"><img src={inapam} style={{ width: 60, height: 60, backgroundColor: '#fff', borderRadius: '50%' }} alt="INAPAM" /></a>
          <Box sx={{ flexGrow: 1, ml: 2 }} display="flex">

          </Box>
          {pages.map((page) => (
            <Button
              key={page.name}
              sx={{ my: 2, color: 'white', display: 'block' }}
              href={page.link}
              component={Link}
            >

              {page.name}
            </Button>
          ))}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default CustomAppBar;
