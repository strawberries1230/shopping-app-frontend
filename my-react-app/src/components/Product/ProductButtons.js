import { Button, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
function ProductButtons() {
    return (
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
    )
}
export default ProductButtons;