import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
function WatchListEntry({ product, handleRemove}) {
  return (
    <ListItem key={product.id} divider>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={product.imageUrl}
          alt={product.name}
          sx={{ width: 100, height: 100, mr: 2 }} // 调整为更大的尺寸
        />
      </ListItemAvatar>
      <ListItemText
        primary={product.name}
        secondary={
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {product.price}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleRemove(product.id)}
          startIcon={<DeleteIcon />}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default WatchListEntry;
