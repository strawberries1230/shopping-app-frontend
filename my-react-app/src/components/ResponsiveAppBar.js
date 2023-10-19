import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LogoLink from "./LogoLink/LogoLink";
import LogoLinkCollapse from "./LogoLink/LogoLinkCollapse";
import NavMenuCollapse from "./NavMenu/NavMenuCollapse";
import NavMenuNormal from "./NavMenu/NavMenuNormal";
import RegisterButton from "./UserBar/RegisterButton";
import UserAccount from "./UserBar/UserAccount";
import UserIcon from "./UserBar/UserIcon";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";
// import axios from "axios";
import { handleLogout } from "../service/authService";

const settings = ["Profile", "AccountStat", "Logout"];

function ResponsiveAppBar() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { setIsModalOpen } = useModal();
    const pages = isLoggedIn ? ["Products", "WatchList", "Orders"] : ["Products"];
  // const pages = isLoggedIn ? ["WatchList", "Orders"] : [];
  //   const handleLogout = async () => {
  //     try {
  //       const response = await axios.post("https://localhost/api/users/logout");
  //       if (response.status === 200) {
  //         setIsLoggedIn(false);
  //         handleCloseUserMenu(); // 关闭用户菜单
  //         navigate("/home");
  //       }
  //       console.log("response :", response);
  //     } catch (error) {
  //       console.error("Login error:", error);
  //     }
  //   };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
            {/* {!isLoggedIn && <RegisterButton navigate={navigate} />} */}
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
                  handleLogout={() =>
                    handleLogout(setIsLoggedIn, handleCloseUserMenu, navigate)
                  }
                  navigate={navigate}
                />
              </>
            ) : (
              <>
                <RegisterButton navigate={navigate} />
                <Button onClick={() => setIsModalOpen(true)} color="inherit">
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
