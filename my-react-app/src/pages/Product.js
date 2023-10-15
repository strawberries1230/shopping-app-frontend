import { Container, Typography, Grid, Paper } from "@mui/material";
import ShortDescription from "../components/Product/ShortDescription";
import ProductButtons from "../components/Product/ProductButtons";
function ProductDetails() {
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
          <ShortDescription />
          <ProductButtons />
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
export default ProductDetails;
