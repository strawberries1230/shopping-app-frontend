import {
  Menu,
  MenuItem,
  Typography
} from "@mui/material";

function UserAccount({
  anchorElUser,
  handleCloseUserMenu,
  settings,
  handleLogout,
  navigate,
}) {
  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting) => (
        <MenuItem
          key={setting}
          onClick={() => {
            if (setting === "Logout") {
              handleLogout();
              navigate("/home");
            } else if (setting === "AccountStat") {
              navigate("/product/stat");
            } else if (setting === "Profile") {
              navigate("/home/profile");
            }
            handleCloseUserMenu();
          }}
        >
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default UserAccount;
