'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Button,
} from '@mui/material';


export default function RecipeCarousel({ title = 'Feature Recipes', recipes}) {
  const [open, setOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<string | null>(null);
  const [instructions, setInstructions] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOpen = async (title: string) => {
    setSelectedRecipe(title);
    setOpen(true);
    setLoading(true);

    try {
      const res = await fetch('/api/instructions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipe: title }),
      });

      const data = await res.json();
      setInstructions(data.instructions || 'No instructions found.');
    } catch (err) {
      setInstructions('An error occurred while fetching instructions.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRecipe(null);
    setInstructions('');
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        {title}
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
            onClick={() => handleOpen(item.title)}
            sx={{
              minWidth: 250,
              borderRadius: 2,
              overflow: 'hidden',
              flex: '0 0 auto',
              cursor: 'pointer',
              '&:hover': { opacity: 0.9 },
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

      {/* Dialog for Instructions */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Instructions for {selectedRecipe}
        </DialogTitle>
        <DialogContent dividers>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <Typography whiteSpace="pre-line">{instructions}</Typography>
          )}
        </DialogContent>
        <Box sx={{ p: 2, textAlign: 'right' }}>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Dialog>
    </Box>
  );
}