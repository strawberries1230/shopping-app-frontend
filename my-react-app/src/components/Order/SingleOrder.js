import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
function SingleOrder({ order, handleCancel }) {
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={order.thumbnail}
            sx={{ width: 80, height: 80, mr: 2 }}
          />
        </ListItemAvatar>
        <ListItemText
          primary={`Order Date: ${order.date}`}
          secondary={
            <>
              <Typography variant="body2">Items: {order.itemCount}</Typography>
              <Typography variant="body2">Status: {order.status}</Typography>
            </>
          }
        />
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          More
        </Button>
        {order.status === "Processing" && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleCancel(order.id)}
          >
            Cancel
          </Button>
        )}
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
export default SingleOrder;
