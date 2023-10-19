import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function SingleOrder({ order, handleCancel }) {
  const navigate = useNavigate();
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            variant="rounded"
            src={"/xxx.png"}
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
        <Button
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
          onClick={() => {
            navigate(`/order/detail/${order.order_id}`);
            // console.log("order info: ", order.order_id);
          }}
        >
          More
        </Button>
        {order.status === "Processing" && (
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleCancel(order.order_id)}
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
