'use client';

import React from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';

// Static image URLs with proper format
const recipes = [
  {
    title: 'Spaghetti',
    img: 'https://plus.unsplash.com/premium_photo-1677000666741-17c3c57139a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BhZ2hldHRpfGVufDB8fDB8fHww',
  },
  {
    title: 'Steak',
    img: 'https://plus.unsplash.com/premium_photo-1723672929404-36ba6ed8ab50?q=80&w=1063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Sushi',
    img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Salad Bowl',
    img: 'https://images.unsplash.com/photo-1568158879083-c42860933ed7?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Pizza Margherita',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function RecipeCarousel() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Featured Recipes
      </Typography>

      <ImageList
        sx={{
          flexWrap: 'nowrap',
          overflowX: 'auto',
          display: 'flex',
          gap: 2,
          pb: 1,
        }}
        cols={2.5}
      >
        {recipes.map((item, index) => (
          <ImageListItem
            key={index}
            sx={{
              minWidth: 250,
              borderRadius: 2,
              overflow: 'hidden',
              flex: '0 0 auto',
            }}
          >
            <Box
              component="img"
              src={item.img}
              alt={item.title}
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                display: 'block',
                objectFit: 'cover',
              }}
            />
            <ImageListItemBar
              title={item.title}
              sx={{ background: 'rgba(0, 0, 0, 0.6)' }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
