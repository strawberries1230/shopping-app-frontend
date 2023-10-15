import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  Button,
} from "@mui/material";

const orders = [
  {
    id: 1,
    date: "2023-10-10",
    itemCount: 3,
    status: "Shipped",
    thumbnail: "/path-to-your-image.jpg",
  },
  {
    id: 2,
    date: "2023-10-12",
    itemCount: 2,
    status: "Processing",
    thumbnail: "/path-to-another-image.jpg",
  },
  // ... 更多订单数据
];

function OrdersPage() {
  const handleCancel = (orderId) => {
    // 处理订单取消逻辑
    console.log(`Cancelled order with id: ${orderId}`);
  };

  return (
    <List sx={{ maxWidth: "80%", margin: "0 auto" }}>
      {orders.map((order) => (
        <React.Fragment key={order.id}>
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
                  <Typography variant="body2">
                    Items: {order.itemCount}
                  </Typography>
                  <Typography variant="body2">
                    Status: {order.status}
                  </Typography>
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
        </React.Fragment>
      ))}
    </List>
  );
}

export default OrdersPage;
