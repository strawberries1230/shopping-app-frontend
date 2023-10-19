import { Box, List, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import WatchListEntry from "../components/WatchList/WatchListEntry";
import axios from "axios";
import { removeWatchListFromDatabase } from "../service/watchListSevice";
import { useAuth } from "../contexts/AuthContext";
import { forceLogout } from "../service/authService";
import { useProduct } from "../contexts/WatchListContext";
import { useNavigate } from "react-router-dom";


function WatchList() {
  //   const [currentProducts, setCurrentProducts] = useState([]);
  const { currentProducts, setCurrentProducts } = useProduct();
  const { setIsLoggedIn, setIsForcedLogout} = useAuth();
  // const navigate = useNavigate();
  useEffect(() => {
    axios
      //   .get("https://localhost:8443/api/products")
      .get(`https://localhost/api/products/watchlist/all`)
      .then((response) => {
        setCurrentProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          forceLogout(setIsLoggedIn, setIsForcedLogout);
          // Navigate()
        }
      });
  }, []);

  //   const handleRemove = (id, setIsLoggedIn) => {

  //     removeWatchListFromDatabase(id, setIsLoggedIn, currentProducts, setCurrentProducts);

  //   };
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
            <WatchListEntry
              product={product}
              handleRemove={() =>
                removeWatchListFromDatabase(
                  product.product_id,
                  setIsLoggedIn,
                  currentProducts,
                  setCurrentProducts,
                  setIsForcedLogout
                )
              }
              setIsLoggedIn={setIsLoggedIn}
            />
          ))}
        </List>
      </Box>
    </div>
  );
}

export default WatchList;
