import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography gutterBottom sx={{ color: 'blue', fontSize: 14 }}>
      <PersonAddAltIcon />
      </Typography>
      <Typography variant="h5" component="div">
        86,435
      </Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>New Clients</Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>
       +5%
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard3() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
