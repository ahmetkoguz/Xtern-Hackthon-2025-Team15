import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function ConversionChartPage() {
  return (
    <>
    <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
    Kitchen Conversion Chart
    </Typography>
    <Container
      disableGutters
      sx={{
        overflow: 'auto',
        backgroundColor: '#f9f9f9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 4,
      }}
    >

      <Box
        component="img"
        src="/conversion_chart.jpg"
        alt="Kitchen Conversion Chart"
        sx={{
          width: '100%',
          height: '100%',
          borderRadius: 2,
          boxShadow: 3,
          objectFit: 'contain',
        }}
      />
    </Container>
    </>
  );
}