import axios from "axios";
async function handleLogin(
  data,
  setIsLoggedIn,
  setAlertType,
  setSnackbarMessage,
  navigate,
  setOpenSnackbar

  
) {
  try {


    console.log("data :", data);
    const response = await axios.post("http://localhost:8080/api/users/login", {
      username: data.username,
      password: data.password,
    });
    if (response.status === 200) {
      setAlertType("success");
      setSnackbarMessage("Login Sucess!");
      setIsLoggedIn(true);
   
      navigate("/home");
    }
    console.log("response :" + response);
  } catch (error) {
    setAlertType("error");
    setSnackbarMessage("Username/Password doesnt match!");

    console.error("Login error:", error);
  } finally {
    setOpenSnackbar(true);

  }
}
export { handleLogin };
