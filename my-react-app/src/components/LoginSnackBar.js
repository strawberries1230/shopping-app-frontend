import { Snackbar, Alert } from "@mui/material";
function LoginSnackBar({ open, onClose, severity, message }) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled">
        {message}
      </Alert>
    </Snackbar>
  );
}
export default LoginSnackBar;
