import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  ListItemSecondaryAction,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function WatchListEntry({ product, handleRemove, setIsLoggedIn}) {
  return (
    <ListItem key={product.id} divider>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={"path_to_image1.jpg"}
          //   alt={product.name}
          sx={{ width: 100, height: 100, mr: 2 }} // 调整为更大的尺寸
        />
      </ListItemAvatar>
      <ListItemText
        primary={product.description}
        secondary={
          <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
            {product.retail_price}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={() => handleRemove(product.product_id, setIsLoggedIn)}
          startIcon={<DeleteIcon />}
        >
          Remove
        </Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
export default WatchListEntry;
