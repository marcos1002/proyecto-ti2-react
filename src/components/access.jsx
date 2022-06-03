import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import usersService from '../services/users.service';

const columns = ['Nombre', 'Apellidos', 'CURP', 'Email', 'INE', 'CURP pdf', 'Comprobante', 'Foto', 'Acciones'];
const files = ['ine', 'curp', 'addressProof', 'photo'];

const Register = () => {
  const [data, setData] = useState([]);

  const getInfo = async () => {
    const data = await usersService.find();
    setData(data);
  };

  const downloadFile = async (user, file) => {
    const fileData = await usersService.findFile(user._id, file);
    const url = window.URL.createObjectURL(fileData);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${user.firstName}-${file}.${fileData.type.split('/')[1]}`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const approveRequest = async (user) => {
    await usersService.generateCard(user._id);
    alert('Se ha aprobado la solicitud.\nLa tarjeta ha sido enviada al correo electrónico del usuario.');
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <Container maxWidth="lg" sx={{ mt: 2, }}>
      <Grid container py={4}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1" align="center">
            Usuarios
          </Typography>
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <TableCell key={column} align={i < 3 ? 'left' : 'center'}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.curpText}</TableCell>
                <TableCell>{user.email}</TableCell>
                {files.map((file) => (
                  <TableCell key={file} align="center">
                    <IconButton
                      onClick={() => downloadFile(user, file)}
                      color="primary"
                      aria-label="download"
                    >
                      <DownloadIcon />
                    </IconButton>
                  </TableCell>
                ))}
                <TableCell align="center">
                  <IconButton
                    onClick={() => approveRequest(user)}
                    color="primary"
                    aria-label="approve"
                    title="Aprobar solicitud"
                  >
                    <CheckCircleIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Register;