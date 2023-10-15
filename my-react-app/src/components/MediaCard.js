import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';

export default function MediaCard() {
  return (
    <Card sx={{ width: 345, maxWidth: '100%' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
      <CardActions>
      
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: '#d32f2f' }}/>
        </IconButton>
        <Box flexGrow={1}></Box>   
        <Button size="small">MORE</Button>
      </CardActions>
    </Card>
  );
}
