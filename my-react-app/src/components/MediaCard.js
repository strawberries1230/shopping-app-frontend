import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function MediaCard() {
  return (
    <Card sx={{ width: 345, maxWidth: "100%" }}>
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
          <FavoriteIcon style={{ color: "#d32f2f" }} />
        </IconButton>
        <Box flexGrow={1}></Box>
        <Button size="small">MORE</Button>
      </CardActions>
    </Card>
  );
}
export default MediaCard;