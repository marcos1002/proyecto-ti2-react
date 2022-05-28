import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const IconInfo = ({ text, Icon }) => {
  return (
    <Box display="flex" py={1} position="relative">
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '20%',
          boxSizing: 'border-box',
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={1.5}
        width={48}
        height={48}
      >
        <Icon sx={{ color: '#fff' }} />
      </Box>
      <Typography variant="body1" align="left" px={2}>
        {text}
      </Typography>
    </Box>
  );
};

export default IconInfo;