import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import HomeIcon from '@mui/icons-material/Home';
import HelpIcon from '@mui/icons-material/Help';
import OutlinedCard from './OutlinedCard';
import OutlinedCard2 from './OutlinedCard2';
import OutlinedCard3 from './OutlinedCard3';
import OutlinedCard4 from './OutlinedCard4';


const NAVIGATION = [
 
    {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <HomeIcon />,
  },
  {
    segment: 'FAQ',
    title: 'FAQ Page',
    icon: <HelpIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* <Typography>Dashboard content for {pathname}</Typography> */}
    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function DashboardLayoutBranding(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    
   
    <AppProvider

     
      navigation={NAVIGATION}
      branding={{
        logo: <img src="//logotyp.us/file/dallas-cowboys.svg" alt="restaurant logo" />,
        title: "The King's Restaurant",
        homeUrl: '/toolpad/core/introduction',
      }}
      
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      
      <DashboardLayout>
      <h1>DASHBOARD</h1>
      <p>Welcome to your dashboard</p>
      <OutlinedCard />
      <OutlinedCard2 />
      <OutlinedCard3 />
      <OutlinedCard4 />
      
        <DemoPageContent pathname={router.pathname} />
       
      </DashboardLayout>
    
    </AppProvider>
    // preview-end
  );
}



export default DashboardLayoutBranding;
