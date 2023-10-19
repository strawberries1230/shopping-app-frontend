import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function NavMenuCollapse({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  pages,
  navigate,
  isLoggedIn,
}) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <MenuItem
            key={page}
            onClick={() => {
              if (page === "Products") {
                navigate("/product");
              } 
              if (isLoggedIn && page === "WatchList") {
                navigate("/product/watchlist");
              } else if (isLoggedIn && page === "Orders") {
                navigate("/order");
              }
              handleCloseNavMenu();
            }}
          >
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
export default NavMenuCollapse;
