// src/pages/Home.js
import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import MediaCard from "../components/MediaCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { forceLogout } from "../service/authService";
import { useAuth } from "../contexts/AuthContext";
import { useProduct } from "../contexts/WatchListContext";
function AllProducts() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  const { setIsLoggedIn, setIsForcedLogout} = useAuth;
  const {currentProducts, setCurrentProducts} = useProduct();


  useEffect(() => {
    axios
      //   .get("https://localhost:8443/api/products")
      .get("https://localhost/api/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(true);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
      });
  }, []);
  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h5" sx={{ mt: 4 }}>
          Not able to fetch products, something goes wrong...
        </Typography>
      </Box>
    );
  }
  if (!products) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Typography variant="h3" sx={{ mt: 4 }}>
          Loading...
        </Typography>
      </Box>
    );
  }
  return (
    <div style={{ padding: "30px" }}>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={4} md={3}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <MediaCard
                product={product}
                currentProducts={currentProducts}
                setCurrentProducts={setCurrentProducts}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default AllProducts;
