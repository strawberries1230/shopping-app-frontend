import React from "react";
import { Typography, Divider } from "@mui/material";
function ShortDescription({product}) {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        {product.description}
      </Typography>
      <Typography variant="h5" color="primary" gutterBottom>
        {product.retail_price}
      </Typography>
      <Typography variant="body1" paragraph>
        This is a detailed description of the product. It provides key features,
        specifications, and benefits of the product.
      </Typography>
      <Divider sx={{ my: 2 }} />
    </>
  );
}
export default ShortDescription;
