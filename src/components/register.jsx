import { useState } from 'react';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FileInput from './file-input';
import Typography from '@mui/material/Typography';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HandshakeIcon from '@mui/icons-material/Handshake';
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import Container from '@mui/material/Container';
import IconInfo from './icon-info';
import CustomAppBar from './custom-app-bar';
import usersService from '../services/users.service';

const logos = {
  dif: require('../assets/img/logo-dif.png'),
  tec: require('../assets/img/logo-tec.png'),
  inapam: require('../assets/img/logo-inapam.png')
}

const Register = () => {
  const [name, setName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [email, setEmail] = useState('');
  const [ine, setIne] = useState('');
  const [curp, setCurp] = useState('');
  const [photo, setPhoto] = useState('');
  const [addressProof, setAddressProof] = useState('');
  const [accept, setAccept] = useState(false);

  const sendInfo = async () => {
    const form = document.getElementById('form');
    if (!form.checkValidity()) {
      alert('Por favor, llena todos los campos');
      return;
    }
    if (!accept) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }
    const data = new FormData();
    data.append('firstName', name);
    data.append('lastName', lastName1 + ' ' + lastName2);
    data.append('email', email);
    data.append('ine', ine);
    data.append('curp', curp);
    data.append('photo', photo);
    data.append('addressProof', addressProof);
    try {
      const response = await usersService.insert(data);
      if (response.status === 201) {
        alert('Registro exitoso');
      }
    }
    catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Grid container py={4}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1" align="center">
            REGISTRO
          </Typography>
          <Typography variant="h3" align="center">
            Ingresa tu información
          </Typography>
        </Grid>
      </Grid>

      <Grid container py={4} spacing={10}>
        <Grid item md={6}>
          <Typography variant="h5" align="center">
            Procura mandar la información actualizada
          </Typography>
          <Box component="form" id="form">
            <Grid container spacing={1}>
              <Grid item md={4}>
                <TextField label="Nombre(s)" variant="standard" size="small" value={name}
                  onChange={(e) => setName(e.target.value)} required />
              </Grid>
              <Grid item md={4}>
                <TextField label="Apellido Paterno" variant="standard" size="small"
                  value={lastName1} onChange={(e) => setLastName1(e.target.value)} required />
              </Grid>
              <Grid item md={4}>
                <TextField label="Apellido Materno" variant="standard" size="small"
                  value={lastName2} onChange={(e) => setLastName2(e.target.value)} required />
              </Grid>
              <Grid item md={12}>
                <TextField label="Correo Electrónico" variant="standard" size="small" fullWidth type="email"
                  value={email} onChange={(e) => setEmail(e.target.value)} required />
              </Grid>
              <Grid item md={12} mt={1}>
                <FileInput label="INE" name="ine"
                  value={ine.name} onChange={(e) => setIne(e.target.files[0])} required />
              </Grid>
              <Grid item md={12} mt={1}>
                <FileInput label="CURP" name="curp"
                  value={curp.name} onChange={(e) => setCurp(e.target.files[0])} required />
              </Grid>
              <Grid item md={12} mt={1}>
                <FileInput label="Foto" name="photo"
                  value={photo.name} onChange={(e) => setPhoto(e.target.files[0])} required />
              </Grid>
              <Grid item md={12} mt={1}>
                <FileInput label="Comprobante de Domicilio" name="addressProof"
                  value={addressProof.name} onChange={(e) => setAddressProof(e.target.files[0])} required />
              </Grid>
              <Grid item xs={12} sm={12} md={12} mt={1}>
                <FormControlLabel control={<Switch size='small' color='secondary' value={accept} onChange={e => setAccept(e.target.value)} />} label="Acepto que mi información sea
                                  para uso exclusivo de la plataforma." componentsProps={{ typography: { fontSize: '1rem' } }} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} mt={0}>
                <Button variant="contained" color="dark" fullWidth onClick={sendInfo}>
                  Mandar Información
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item container md={6} display="block">
          <Grid item md={12}>
            <Typography variant="h3" align="center">
              Dudas y Requisitos
            </Typography>
            <Typography variant="body1" align="center" p={1}>
              Recuerda mandar tu información de forma actualizada, pues es la
              información que se mostrará en tu credencial.
            </Typography>
          </Grid>
          <Grid item container md={12} mt={2}>
            <Grid item md={12} px={2}>
              <IconInfo text="Recuerda mandar tu información de anera ordenada y correcta para evitar problemas."
                Icon={DirectionsBoatIcon} />
            </Grid>
            <Grid item md={12} px={2}>
              <IconInfo text="Tu información sera revisada y en caso de errores, se te
                          notificara al correo electronico."
                Icon={HandshakeIcon} />
            </Grid>
            <Grid item md={12} px={2}>
              <IconInfo text={<ul>
                <li>Si tu información es válida, se te enviara un
                  correo de
                  verificación para que puedas recoger tu credencial.</li>
                <li>El tiempo de verificación va de 4 a 5 días.</li>
              </ul>}
                Icon={HourglassFullIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;