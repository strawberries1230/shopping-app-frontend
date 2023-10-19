import { Snackbar, Alert } from "@mui/material";
import { useAuthToast } from "../contexts/AuthToastContext";
function LoginSnackBar() {
  const { openSnackbar, setOpenSnackbar, snackbarMessage, alertType } =
    useAuthToast();

  return (
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
  );
}
export default LoginSnackBar;
