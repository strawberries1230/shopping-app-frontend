import axios from "axios";
async function handleLogin(
  data,
  setIsLoggedIn,
  setAlertType,
  setSnackbarMessage,
  navigate,
  setOpenSnackbar,
  setIsModalOpen
) {
  try {
    console.log("data :", data);
    // "https://localhost:8443/api/users/login"
    const response = await axios.post("https://localhost/api/users/login", {
      username: data.username,
      password: data.password,
    });
    if (response.status === 200) {
      setAlertType("success");
      setSnackbarMessage("Login Sucess!");
      setIsLoggedIn(true);
      setIsModalOpen(false);
      navigate("/home");
    }
    console.log("response :", response);
  } catch (error) {
    setAlertType("error");
    setSnackbarMessage("Username/Password doesnt match!");
    setIsModalOpen(true);
    console.error("Login error:", error);
  } finally {
    setOpenSnackbar(true);
  }
}

const handleLogout = async (setIsLoggedIn, handleCloseUserMenu, navigate) => {
  try {
    const response = await axios.post("https://localhost/api/users/logout");
    if (response.status === 200) {
      setIsLoggedIn(false);
      handleCloseUserMenu(); // 关闭用户菜单
      navigate("/home");
    }
    console.log("response :", response);
  } catch (error) {
    console.error("Login error:", error);
  }
};

const forceLogout = async (setIsLoggedIn, setIsForcedLogout) => {
  try {
    const response = await axios.post("https://localhost/api/users/logout");
    if (response.status === 200) {
      setIsLoggedIn(false);
      setIsForcedLogout(true);
    }
    console.log("response :", response);
  } catch (error) {
    console.error("Login error:", error);
  }
};

export { handleLogin, handleLogout, forceLogout };
