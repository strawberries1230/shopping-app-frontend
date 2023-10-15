import React from 'react';
import {
  Avatar,
  Button,
  Card,
  CardContent,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

// 举例的订单详情数据
const orderDetail = {
  status: 'Processing', // 也可以是 'Completed' 或其他
  date: '2023-10-10',
  items: [
    {
      id: 1,
      name: 'Item 1',
      price: '$10.00',
      quantity: 2,
      thumbnail: '/path-to-image-1.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      price: '$20.00',
      quantity: 1,
      thumbnail: '/path-to-image-2.jpg',
    },
    // ... 更多商品
  ],
};

export default function OrderDetailPage() {
  const handleCancelOrder = () => {
    // 这里处理取消订单的逻辑，例如发送一个API请求
    console.log('订单已取消');
  };

  return (
    <Card sx={{ maxWidth: 600, width:"100%",margin: '20px auto'}}>
      <CardContent sx={{paddingBottom:0}}>
        <Typography variant="h6">
          Order Detail
        </Typography>
        <Typography variant="body1">
          Status: {orderDetail.status}
        </Typography>

        <Typography variant="body1" sx={{paddingBottom:0}}>
          Order Placed At: {orderDetail.date}
        </Typography>
      </CardContent>
      <List>
        {orderDetail.items.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar variant="rounded" src={item.thumbnail} sx={{ width: 60, height: 60, mr:2}} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link href={`/products/${item.id}`} color="primary">
                  {item.name}
                </Link>
              }
              secondary={
                <>
                  <Typography variant="body2">
                    Price: {item.price}
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
      <CardContent sx={{paddingBottom:0, display:'flex',justifyContent:'flex-end'}}>
      {orderDetail.status === 'Processing' && (
          <Button 
            variant="contained" 
            color="secondary" 
            onClick={handleCancelOrder}
          >
            Cancel Order
          </Button>
        )}
        </CardContent>
  
    </Card>
  );
}
