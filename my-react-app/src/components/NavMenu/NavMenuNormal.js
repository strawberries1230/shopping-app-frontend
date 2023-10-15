import { Box, Button } from "@mui/material";
function NavMenu({ pages, navigate, isLoggedIn, handleCloseNavMenu }) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => {
            if (page === "Products") {
              navigate("/product");
            } else if (isLoggedIn && page === "WatchList") {
              navigate("/product/watchlist");
            } else if (isLoggedIn && page === "Orders") {
              navigate("/order");
            }
            handleCloseNavMenu();
          }}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}
export default NavMenu;
