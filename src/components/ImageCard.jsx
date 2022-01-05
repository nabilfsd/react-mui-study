import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import CustomButtons from './CustomButtons';

const ImageCard = () => {
  return (
      <Card sx={{ maxWidth: 345, margin: '0 auto',
      padding: '20px'
      }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" variant='contained'>Learn More</Button>
        <CustomButtons></CustomButtons>
      </CardActions>
    </Card>
  )
}

export default ImageCard
