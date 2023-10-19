import { Container, Typography, Grid, Paper, Skeleton } from "@mui/material";
import ShortDescription from "../components/Product/ShortDescription";
import ProductButtons from "../components/Product/ProductButtons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { forceLogout } from "../service/authService";
import { useAuth } from "../contexts/AuthContext";

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const {setIsLoggedIn, setIsForcedLogout} = useAuth();
  console.log("product id:", id);
  useEffect(() => {
    axios
      //   .get("https://localhost:8443/api/products")
      .get(`https://localhost/api/products/single/${id}`)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
      });
  }, [id]);
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
          {!product ? (
            <>
              <Skeleton variant="text" width="90%" height={50} />
              <Skeleton variant="text" width="90%" height={40} />
            </>
          ) : (
            <ShortDescription product={product} />
          )}
          {/* {!product && (
            <Typography variant="h5" sx={{ mt: 4 }}>
              No product!!
            </Typography>
          )}
          {product && <ShortDescription product={product} />} */}
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
