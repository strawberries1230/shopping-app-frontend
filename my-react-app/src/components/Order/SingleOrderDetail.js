import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
function SingleOrderDetail({ item }) {
  return (
    <ListItem key={item.id}>
      <ListItemAvatar>
        <Avatar
          variant="rounded"
          src={item.thumbnail}
          sx={{ width: 60, height: 60, mr: 2 }}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link to={`/products/${item.id}`} color="primary">
            {item.name}
          </Link>
        }
        secondary={
          <>
            <Typography variant="body2">Price: {item.price}</Typography>
            <Typography variant="body2">Quantity: {item.quantity}</Typography>
          </>
        }
      />
    </ListItem>
  );
}
export default SingleOrderDetail;
