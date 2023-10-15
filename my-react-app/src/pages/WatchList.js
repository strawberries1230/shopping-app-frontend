import * as React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  Button
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const products = [
  {
    id: 1,
    name: "Product 1",
    imageUrl: "path_to_image1.jpg",
    price: "$100",
  },
  {
    id: 2,
    name: "Product 2",
    imageUrl: "path_to_image2.jpg",
    price: "$120",
  },
  // ... 更多产品数据
];

function WatchList() {
  const [currentProducts, setCurrentProducts] = React.useState(products);

  const handleRemove = (id) => {
    const updatedProducts = currentProducts.filter(
      (product) => product.id !== id
    );
    setCurrentProducts(updatedProducts);
  };
  return (
    <div style={{ justifyContent: "center", display: "flex", padding: "20px" }}>
      <Box sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}>
        <Typography
          variant="h6"
          component="div"
          sx={{
            p: 2,
            textAlign: "center",
            fontFamily: "Roboto, Arial, sans-serif",
            fontWeight: "bold",
            lineHeight: "1.4",
          }}
        >
          Watch List
        </Typography>
        <List>
          {currentProducts.map((product) => (
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
                  startIcon={< DeleteIcon />}
                >
                  Remove
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default WatchList;
