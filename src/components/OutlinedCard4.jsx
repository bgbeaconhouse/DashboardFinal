import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TrafficIcon from '@mui/icons-material/Traffic';

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
      <TrafficIcon />
      </Typography>
      <Typography variant="h5" component="div">
        23,784,133
      </Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>Traffic Received</Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>
        +43%
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard4() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
