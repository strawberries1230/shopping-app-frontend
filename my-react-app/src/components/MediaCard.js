import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  IconButton,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { handleAddWatchList } from "../service/watchListSevice";
import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { checkProductInWatchlist } from "../service/watchListSevice";
function MediaCard({ product, currentProducts, setCurrentProducts }) {
  const navigate = useNavigate();
  const [notLoginWarning, setNotLoginWarning] = useState(false);
  const [addToList, setAddToList] = useState(false);
  const [added, setAdded] = useState(false);
  const { isLoggedIn, setIsLoggedIn, setIsForcedLogout} = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      setAdded(false);
    } else {
      async function checkWatchlistStatus() {
        try {
          // 假设你已经有了一个API函数来检查产品是否在watchlist中
          await checkProductInWatchlist(
            product.product_id,
            setAdded,
            setIsLoggedIn
          );
          //   console.log(response.data);
        } catch (error) {
          console.error("Error checking product in watchlist:", error);
        }
      }
      checkWatchlistStatus();
    }
  }, [isLoggedIn, product.product_id]); // 当`isLoggedIn`或`product.product_id`发生变化时再次运行`useEffect`

  return (
    <>
      <Card sx={{ width: 345, maxWidth: "100%" }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            {added ? (
              <FavoriteIcon
                style={{ color: "#d32f2f" }}
                onClick={() =>
                  handleAddWatchList(
                    isLoggedIn,
                    product.product_id,
                    setNotLoginWarning,
                    setAddToList,
                    setAdded,
                    added,
                    setIsLoggedIn,
                    currentProducts,
                    setCurrentProducts,
                    setIsForcedLogout
                  )
                }
              />
            ) : (
              <FavoriteBorderIcon
                style={{ color: "#d32f2f" }}
                onClick={() =>
                  handleAddWatchList(
                    isLoggedIn,
                    product.product_id,
                    setNotLoginWarning,
                    setAddToList,
                    setAdded,
                    added,
                    setIsLoggedIn,
                    currentProducts,
                    setCurrentProducts,
                    setIsForcedLogout
                  )
                }
              />
            )}
          </IconButton>
          <Box flexGrow={1}></Box>
          <Button
            size="small"
            onClick={() => navigate(`/product/${product.product_id}`)}
          >
            MORE
          </Button>
        </CardActions>
      </Card>
      <Snackbar
        open={notLoginWarning}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setNotLoginWarning(false)}
      >
        <Alert
          onClose={() => setNotLoginWarning(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Please log in first
        </Alert>
      </Snackbar>

      <Snackbar
        open={addToList}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setAddToList(false)}
      >
        <Alert
          onClose={() => setAddToList(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          You add to watchlist!
        </Alert>
      </Snackbar>
    </>
  );
}
export default MediaCard;
