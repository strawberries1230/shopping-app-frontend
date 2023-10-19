import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";
function LogoLinkCollapse() {
  return (
    <>
      <Link to="/home" sx={{ textDecoration: "none", color: "white" }}>
        <AdbIcon
          sx={{
            display: { xs: "flex", md: "none" },
            mr: 1,
            color: "white",
          }}
        />
      </Link>

      <Typography
        variant="h5"
        noWrap
        component={Link}
        to="/home"
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        LOGO
      </Typography>
    </>
  );
}
export default LogoLinkCollapse;
