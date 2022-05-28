import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CustomAppBar from './custom-app-bar';

const logos = {
  dif: require('../assets/img/logo-dif.png'),
  tec: require('../assets/img/logo-tec.png'),
  inapam: require('../assets/img/logo-inapam.png')
}

const Main = ({ children }) => {
  return (
    <Box className='bg-gray'>
      <CustomAppBar />

      <Container maxWidth="lg" sx={{ mt: 2, }}>

        {children}

      </Container>

      <Grid container pt={5} mt={5}>
        <Grid container direction="column" item md={4} mb={1} justifyContent="center" alignItems="center">
          <Grid item>
            <a href="https://www.gob.mx/inapam/">
              <img src={logos.inapam} style={{ height: '120px' }} alt='main_logo' />
            </a>
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">Instituto Nacional de las Personas Adultas Mayores.</Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" item md={4} mb={1} justifyContent="center" alignItems="center">
          <Grid item>
            <img src={logos.dif} style={{ height: "120px" }} alt="main_logo" />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">Sistema para el Desarrollo Integral de la Familia.</Typography>
          </Grid>
        </Grid>

        <Grid container direction="column" item md={4} mb={1} justifyContent="center" alignItems="center">
          <Grid item>
            <img src={logos.tec} style={{ height: "120px" }} alt="main_logo" />
          </Grid>
          <Grid item>
            <Typography variant="h6" align="center">Instituto Tecnológico de la Laguna</Typography>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="body1" align="center" p={1} fontSize="0.9rem">
            All rights reserved. Copyright ©{new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;