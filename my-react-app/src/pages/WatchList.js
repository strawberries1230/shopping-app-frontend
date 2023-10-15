import {
  Box,
  List,
  Typography
} from "@mui/material";
import { useState } from "react";
import WatchListEntry from "../components/WatchList/WatchListEntry";

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
  const [currentProducts, setCurrentProducts] = useState(products);

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
            <WatchListEntry product={product} handleRemove={handleRemove} />
          ))}
        </List>
      </Box>
    </div>
  );
}

export default WatchList;
