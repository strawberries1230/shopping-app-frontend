import React, { useState } from "react";
import { Container, Typography, Paper, Alert } from "@mui/material";
import RegisForm from "../components/RegisForm";
import axios from "axios";
import { useAuth } from "../contexts/AuthContext";
import { handleLogin } from "../service/authService";
import { useNavigate } from "react-router-dom";
import { useAuthToast } from "../contexts/AuthToastContext";
import { useModal } from "../contexts/ModalContext";
import { forceLogout } from "../service/authService";
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registerError, setRegisterError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);
  const { setIsLoggedIn, setIsForcedLogout} = useAuth();
  const { openSnackBar, setOpenSnackbar, setSnackbarMessage, setAlertType } =
    useAuthToast();
  const { setIsModalOpen } = useModal();
  const handleSubmit = async (e) => {
    // setOpenSnackbar(true);
    e.preventDefault();
    console.log(openSnackBar);

    // return;

    // Convert formData to the expected format
    const apiFormData = {
      username: formData.username, // Convert 'username' to 'name'
      email: formData.email, // Keep 'email' as-is
      rnsdc_password: formData.password, // Keep 'password' as-is
    };
    setSnackbarMessage("Test message from Register component");

    try {
      const response = await axios.post(
        // "http://localhost:8080/api/users/register",
        // "https://localhost:8843/api/users/register",
        "https://localhost/api/users/register",
        apiFormData
      );
      console.log("reponse :" + response.status);
      if (response.status === 200) {
        // TODO: Handle successful registration
        // console.log("User registered successfully!");
        setRegisterError(null);
        setRegisterSuccess("Successfully registered!");
        const data = {
          username: formData.username,
          password: formData.password,
        };
        handleLogin(
          data,
          setIsLoggedIn,
          setAlertType,
          setSnackbarMessage,
          navigate,
          setOpenSnackbar,
          setIsModalOpen
        );
      } else {
        // TODO: Handle any errors from the server
        setRegisterSuccess(null);
        setRegisterError(
          "Something goes wrong with registering, try it later..."
        );
        // console.error("Error registering user:", response);
      }
    } catch (error) {
      // TODO: Handle network or server errors
      setRegisterSuccess(null);
      if (error.response.status === 409) {
        setRegisterError("Username or email already exists.");
      } else if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        forceLogout(setIsLoggedIn, setIsForcedLogout);
      } else {
        setRegisterError(
          "Something goes wrong with registering, try it later..."
        );
      }
      // console.error("There was an error:", error);
    }

    // console.log("Registration data submitted:", formData);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 3,
          mt: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        {registerError && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {registerError}
          </Alert>
        )}

        {registerSuccess && <Alert severity="success">{registerSuccess}</Alert>}

        <RegisForm
          formData={formData}
          setFormData={setFormData}
          handleSubmit={handleSubmit}
        />
      </Paper>
    </Container>
  );
}

export default Register;
