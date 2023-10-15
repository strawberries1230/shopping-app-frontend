import {AppBar,Box,Toolbar,Container,Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";
import LogoLink from "./LogoLink/LogoLink";
import LogoLinkCollapse from "./LogoLink/LogoLinkCollapse";
import NavMenuCollapse from "./NavMenu/NavMenuCollapse";
import NavMenuNormal from "./NavMenu/NavMenuNormal";
import RegisterButton from "./UserBar/RegisterButton";
import UserAccount from "./UserBar/UserAccount";
import UserIcon from "./UserBar/UserIcon";
// import { useRef } from "react";
import LoginSnackBar from "./LoginSnackBar";
const settings = ["Profile", "AccountStat", "Logout"];

function ResponsiveAppBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 新增的状态
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const pages = isLoggedIn ? ["Products", "WatchList", "Orders"] : ["Products"];


  const handleLogout = () => {
    setIsLoggedIn(false);
    handleCloseUserMenu(); // 关闭用户菜单
    navigate("/home");
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  //   const userIconRef = useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    // setAnchorElNav(userIconRef.current);

    // console.log(userIconRef.current);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    // console.log(event.currentTarget);
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
      navigate("/home");
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
          <LogoLink />
          <NavMenuCollapse
            handleOpenNavMenu={handleOpenNavMenu}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            pages={pages}
            navigate={navigate}
            isLoggedIn={isLoggedIn}
          />
          <LogoLinkCollapse />
          <NavMenuNormal
            pages={pages}
            navigate={navigate}
            isLoggedIn={isLoggedIn}
            handleCloseNavMenu={handleCloseNavMenu}
          />

          <Box sx={{ flexGrow: 0 }}>
            {!isLoggedIn && <RegisterButton navigate={navigate} />}
            {isLoggedIn ? (
              <>
                <UserIcon
                  //   ref={userIconRef}
                  handleOpenUserMenu={handleOpenUserMenu}
                />
                <UserAccount
                  anchorElUser={anchorElUser}
                  handleCloseUserMenu={handleCloseUserMenu}
                  settings={settings}
                  handleOpenUserMenu={handleOpenUserMenu}
                  handleLogout={handleLogout}
                  navigate={navigate}
                />
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
      <LoginSnackBar
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        severity={alertType}
        message={snackbarMessage}
      />
    </AppBar>
  );
}
export default ResponsiveAppBar;
