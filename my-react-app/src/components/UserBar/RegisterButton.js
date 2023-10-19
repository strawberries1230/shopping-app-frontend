import { Button } from "@mui/material";
function RegisterButton({ isLoggedIn, navigate }) {
  return (
    <Button
      onClick={() => {
        navigate("/home/register");
      }}
      color="inherit"
      sx={{ mr: 2 }}
    >
      Register
    </Button>
  );
}
export default RegisterButton;
