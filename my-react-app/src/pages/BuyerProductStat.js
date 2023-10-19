import React, { useEffect, useState } from "react";
import { Typography, Container, Grid, Skeleton } from "@mui/material";
import TopProduct from "../components/Product/TopProduct";
import RecentProduct from "../components/Product/RecentProduct";
import axios from "axios";
import { forceLogout } from "../service/authService";
import { useAuth } from "../contexts/AuthContext";
export default function BuyerProductStat() {
  const [topProducts, setTopProducts] = useState([]);
  const [recent3Bought, setRecent3Bought] = useState([]);
  const [isTopLoading, setIsTopLoading] = useState(true);
  const [isRecentLoading, setIsRecentLoading] = useState(true);
  const { setIsLoggedIn, setIsForcedLogout} = useAuth();

  useEffect(() => {
    // "https://localhost:8443/api/products/top"
    axios
      .get("https://localhost/api/products/top")
      .then((response) => {
        console.log("stat", response.data);
        setTopProducts(response.data); // 在axios中，响应数据存储在data属性中
        setIsTopLoading(false);
      })
      .catch((error) => {
        setIsTopLoading(false);
        console.error("Error fetching top products:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
      });

    axios
      .get("https://localhost/api/products/recent", { withCredentials: true })
      .then((response) => {
        console.log("stat", response.data);
        setRecent3Bought(response.data); // 在axios中，响应数据存储在data属性中
        setIsRecentLoading(false);
      })
      .catch((error) => {
        setIsRecentLoading(false);
        console.error("Error fetching top products:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
        }
      });
  }, []);


  return (
    <Container>
      <Typography variant="h4" gutterBottom style={{ marginTop: "20px" }}>
        Buyer Details
      </Typography>
      <Typography variant="h5" gutterBottom>
        Top 3 Bought
      </Typography>
      <Grid container spacing={2}>
        {isTopLoading
          ? // 显示Skeleton占位符
            Array.from({ length: 3 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" height={120} />
              </Grid>
            ))
          : // 显示你的数据
            topProducts.map((product) => <TopProduct product={product} />)}
      </Grid>
      <Typography variant="h5" gutterBottom style={{ marginTop: "24px" }}>
        Recent 3 Bought
      </Typography>
      <Grid container spacing={2}>
        {isRecentLoading
          ? // 显示Skeleton占位符
            Array.from({ length: 3 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" height={120} />
              </Grid>
            ))
          : // 显示你的数据
            recent3Bought.map((product) => <RecentProduct product={product} />)}
      </Grid>
    </Container>
  );
}
