import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const FileInput = ({ label, name, value = '', onChange, required}) => {
  return (
    <>
      <Typography variant="h6" align="center" >
        {label}
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={1}
      >
        <Button variant="outlined" component="label" color="secondary" sx={{ width: '80%' }}>
          <input type="file" name={name} style={{ width: '90%' }} value={value.name} onChange={onChange} required={required} />
        </Button>
      </Box>
    </>
  );
};

export default FileInput;