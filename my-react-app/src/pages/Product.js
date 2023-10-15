import React from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function ProductDetails() {
  return (
    <Container style={{ padding: "30px" }}>
      <Grid container spacing={4}>
        <Grid item md={6}>
          <Paper variant="outlined">
            <img
              src="/path-to-your-image.jpg"
              alt="Product Name"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item md={6}>
          <Typography variant="h4" gutterBottom>
            Product Name
          </Typography>
          <Typography variant="h5" color="primary" gutterBottom>
            $99.99
          </Typography>
          <Typography variant="body1" paragraph>
            This is a detailed description of the product. It provides key
            features, specifications, and benefits of the product.
          </Typography>
          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 2,
              mt: 2,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCartIcon />}
            >
              Add to Cart
            </Button>
            <Button variant="outlined" startIcon={<WatchLaterIcon />}>
              Add to Watchlist
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Typography variant="h5" sx={{ mt: 4 }}>
        Product Details
      </Typography>
      <Typography variant="body2" paragraph>
        Here you can add more detailed information about the product, such as
        dimensions, weight, materials used, and other relevant information.
      </Typography>
    </Container>
  );
}
