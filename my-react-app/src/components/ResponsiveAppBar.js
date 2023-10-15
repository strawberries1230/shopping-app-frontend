import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";
import { Snackbar, Alert } from "@mui/material";

const settings = ["Profile", "AccountStat", "Logout"];

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 新增的状态
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const pages = isLoggedIn ? ["Products", "WatchList", "Orders"] : ["Products"];

  // 模拟登录函数
  //   const handleLogin = () => {
  //     setIsLoggedIn(true);
  //   };

  const handleLogout = () => {
    setIsLoggedIn(false);
    handleCloseUserMenu(); // 关闭用户菜单
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleLogin = (data) => {
    console.log("Login data:", data);
    if (data.password === "123") {
      setIsLoggedIn(true);
      setAlertType("success");
      setSnackbarMessage("Login Sucess!");
    } else {
      setAlertType("error");
      setSnackbarMessage("Username/Password doesnt match!");
    }
    setOpenSnackbar(true);
    // 这里你可以将数据发送到后端进行验证
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Link to="/home" sx={{ textDecoration: "none", color: "white" }}>
            <AdbIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 1,
                color: "white",
              }}
            />
          </Link>

          <Typography
            variant="h6"
            noWrap
            component={Link} // 设置 component 为 Link
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

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
                    } else if (isLoggedIn && page === "WatchList") {
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
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Link to="/home" sx={{ textDecoration: "none", color: "white" }}>
            <AdbIcon
              sx={{
                display: { xs: "flex", md: "none" },
                mr: 1,
                color: "white",
              }}
            />
          </Link>

          <Typography
            variant="h5"
            noWrap
            component={Link} // 设置 component 为 Link
            to="/home"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
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

          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn && (
              <Button
                onClick={() => {
                  navigate("/home/register");
                }}
                color="inherit"
                sx={{ mr: 2 }}
              >
                Register
              </Button>
            )}
            {isLoggedIn ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
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
              </>
            ) : (
              <Button onClick={handleOpenModal} color="inherit">
                Login
              </Button>
            )}

            <LoginModal
              open={modalOpen}
              handleClose={handleCloseModal}
              onLogin={handleLogin}
            />
          </Box>
        </Toolbar>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={alertType}
          variant="filled"
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
