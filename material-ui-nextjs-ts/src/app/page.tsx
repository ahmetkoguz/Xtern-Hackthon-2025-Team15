'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, {useState} from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
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
import RecipeCarousel from './components/recipeCarousal';


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
    { label: 'Recipes', icon: <RestaurantMenuIcon fontSize="large" />, bg: '#d1b3ff', onClick: () => router.push('/recipes') },
    { label: 'Safety', icon: <SecurityIcon fontSize="large" />, bg: '#a4f9a4', onClick: () => router.push('/safety')},
    { label: 'Settings', icon: <SettingsIcon fontSize="large" />, bg: '#dddddd', onClick: () => setOpenSettings(true)},
    { label: 'Sleep Mode', icon: <NightsStayIcon fontSize="large" />, bg: '#a0c4ff', onClick: () => router.push('/sleep_mode') },
    { label: 'Ingredients', icon: <ShoppingBasketIcon fontSize="large" />, bg: '#fddf92', onClick: () => router.push('/ingredients') },
    { label: 'Conversions', icon: <StraightenIcon fontSize="large" />, bg: '#f9a8d4', onClick: () => router.push('/conversions')},
  ];
  return (
    <Box sx={{ textAlign: 'center', p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, color: '#2196f3' }}>
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
          <FormControlLabel
            control={
              <Switch
                checked={features.autoUpdate}
                onChange={() => handleToggle('autoUpdate')}
              />
            }
            label="Auto Update"
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

      <Grid container spacing={3} justifyContent="center">
        {buttonData.map((btn, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
              <IconButton onClick={btn.onClick} style={{ backgroundColor: btn.bg, width: '300px' }}>
                {btn.icon}
                <Typography variant="subtitle1" sx={{ mt: 1 }}>{btn.label}</Typography>
              </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}