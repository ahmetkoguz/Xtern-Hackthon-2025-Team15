'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, {useState} from 'react';
import { Box, Grid, Typography, Button, Fade } from '@mui/material';
import { borderRadius, styled } from '@mui/system';

// Icons
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import SecurityIcon from '@mui/icons-material/Security';
import SettingsIcon from '@mui/icons-material/Settings';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StraightenIcon from '@mui/icons-material/Straighten';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  Backdrop,
} from '@mui/material';

// Styled component
const IconButton = styled(Button)(({ theme }) => ({
  flexDirection: 'column',
  borderRadius: '16px',
  padding: '24px',
  height: '100%',
  width: '100%',
  textTransform: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#000',
}));


export default function SimpleChef() {
  const router = useRouter();

  const [openSettings, setOpenSettings] = useState(false);
  const [showScreensaver, setShowScreensaver] = useState(false);

  const [features, setFeatures] = useState({
    sleepMode: false,
    safetyMode: true,
    autoUpdate: false,
  });

  const handleToggle = (feature: keyof typeof features) => {
    setFeatures(prev => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  // Color mapping
  const buttonData = [
    { label: 'Recipes', icon: <RestaurantMenuIcon fontSize="large" />, bg: '#a4f9a4', onClick: () => router.push('/recipes') },
    { label: 'Settings', icon: <SettingsIcon fontSize="large" />, bg: '#dddddd', onClick: () => setOpenSettings(true)},
    { label: 'Sleep Mode', icon: <NightsStayIcon fontSize="large" />, bg: '#a0c4ff', onClick: () => setShowScreensaver(true)},
    { label: 'Conversions', icon: <StraightenIcon fontSize="large" />, bg: '#f9a8d4', onClick: () => router.push('/conversions')},
  ];
  return (
    <Box sx={{ textAlign: 'center', paddingLeft: 20, paddingRight: 20}}>
      <Typography variant="h2" sx={{ mt: -4, mb: 4, color: '#2196f3' }}>
        SimpleChef
      </Typography>

      <Dialog
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        BackdropProps={{
          timeout: 300,
        }}
        PaperProps={{sx: {borderRadius: '16px'}}}
      >
        <DialogTitle>Settings</DialogTitle>

        <DialogContent>
          <FormControlLabel
            control={
              <Switch
                checked={features.sleepMode}
                onChange={() => handleToggle('sleepMode')}
              />
            }
            label="Metric/Imperial"
            labelPlacement='bottom'
          />
          <FormControlLabel
            control={
              <Switch
                checked={features.safetyMode}
                onChange={() => handleToggle('safetyMode')}
              />
            }
            label="Celsius/Fahrenheit"
            labelPlacement='bottom'
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpenSettings(false)}>Close</Button>
        </DialogActions>
      </Dialog>

      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.modal - 1 }}
        open={openSettings}
      />

      <Grid container spacing={6} justifyContent="center">
        {buttonData.map((btn, index) => (
          <Grid item xs={12} sm={6} key={index}>
              <IconButton onClick={btn.onClick} style={{ backgroundColor: btn.bg, width: '300px', height:'150px' }}>
                {btn.icon}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>{btn.label}</Typography>
              </IconButton>
          </Grid>
        ))}
      </Grid>

       <Fade in={showScreensaver}>
        <Box
          onClick={() => setShowScreensaver(false)}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            bgcolor: 'black',
            color: 'white',
            zIndex: 1300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2rem',
            cursor: 'pointer',
          }}
        >
          Sleep Mode — click anywhere to wake
        </Box>
      </Fade>
    </Box>
  );
}