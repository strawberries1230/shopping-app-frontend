import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
function ForcedLogoutDdialog() {
  const { isForcedLogout, setIsForcedLogout } = useAuth();
  const navigate = useNavigate();

  function handleClose() {
    setIsForcedLogout(false);
    navigate("/home"); // 3. 导航至 /home
  }
  return (
    <Dialog open={isForcedLogout} onClose={handleClose}>
      <DialogTitle>Time's up</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You session has expired... Click to return to Homepage.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose()} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ForcedLogoutDdialog;
