import { Modal, TextField, Typography, Box, Button } from "@mui/material";
import { useState } from "react";
import { useAuthToast } from "../contexts/AuthToastContext";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../service/authService";
import { useAuth } from "../contexts/AuthContext";
import { useModal } from "../contexts/ModalContext";
function LoginModal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { setIsLoggedIn } = useAuth();
  const { setOpenSnackbar, setSnackbarMessage, setAlertType } = useAuthToast();
  const { isModalOpen, setIsModalOpen } = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(
      formData,
      setIsLoggedIn,
      setAlertType,
      setSnackbarMessage,
      navigate,
      setOpenSnackbar,
      setIsModalOpen
    );
  };

  return (
    <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            label="Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Box>
    </Modal>
  );
}

export default LoginModal;
