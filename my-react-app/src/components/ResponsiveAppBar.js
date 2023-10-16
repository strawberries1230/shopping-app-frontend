import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
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
// import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { handleLogin } from "../service/authService";
import { useAuthToast } from "../contexts/AuthToastContext";
import { useModal } from "../contexts/ModalContext";

//   const [snackbarMessage, setSnackbarMessage] = useState("");
//   const [alertType, setAlertType] = useState("success");

const settings = ["Profile", "AccountStat", "Logout"];

function ResponsiveAppBar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { isModalOpen, setIsModalOpen } = useModal();
  //   const {
  //     openSnackbar,
  //     setOpenSnackbar,
  //     snackbarMessage,
  //     setSnackbarMessage,
  //     alertType,
  //     setAlertType,
  //   } = useAuthToast();
  //   const [isLoggedIn, setIsLoggedIn] = useState(false); // 新增的状态
  //   const [openSnackbar, setOpenSnackbar] = useState(false);
  //   const [snackbarMessage, setSnackbarMessage] = useState("");
  //   const [alertType, setAlertType] = useState("success");
  //   const { isLoggedIn, setIsLoggedIn, isRegisterLogin, setIsRegisterLogin } = useAuth();
  // const { isLoggedIn, setIsLoggedIn } = useAuth();
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

  //   const [modalOpen, setModalOpen] = useState(false);

  //   const handleOpenModal = () => {
  //     setIsModalOpen(true);
  //   };

  //   const handleCloseModal = () => {
  //     setIsModalOpen(false);
  //   };

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
              <Button
                onClick={() => 
                  setIsModalOpen(true)
                }
                color="inherit"
              >
                Login
              </Button>
            )}
            {/* 
            <LoginModal
            //   open={isModalOpen}
            //   handleClose={handleCloseModal}
            /> */}
            {/* <LoginModal
            //   open={isModalOpen}
            //   handleClose={handleCloseModal}
            /> */}
          </Box>
        </Toolbar>
      </Container>
      {/* <LoginSnackBar
      // open={openSnackbar}
      // onClose={() => setOpenSnackbar(false)}
      // severity={alertType}
      // message={snackbarMessage}
      /> */}
    </AppBar>
  );
}
export default ResponsiveAppBar;
