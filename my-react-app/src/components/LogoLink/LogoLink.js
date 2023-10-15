import { Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography } from "@mui/material";
function LogoLink() {
  return (
    <><Link to="/home" sx={{ textDecoration: "none", color: "white" }}>
        <AdbIcon
          sx={{
            display: { xs: "none", md: "flex" },
            mr: 1,
            color: "white",
          }}
        /></Link><Typography
        variant="h6"
        noWrap
        component={Link} // 设置 component 为 Link
        to="/home"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >LOGO</Typography></>
  );
}
export default LogoLink;
