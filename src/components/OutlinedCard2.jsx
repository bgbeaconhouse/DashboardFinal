import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

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
      <PointOfSaleIcon />
      </Typography>
      <Typography variant="h5" component="div">
        837 
      </Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>Sales Obtained</Typography>
      <Typography sx={{ color: 'blue', mb: 1.5 }}>
        +21%
       
      </Typography>
    </CardContent>
   
  </React.Fragment>
);

export default function OutlinedCard2() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
