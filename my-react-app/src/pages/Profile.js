import React, { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";
import { forceLogout } from "../service/authService";
function ProfilePage() {
  const [user, setUser] = useState(null);
  const {setIsLoggedIn} = useAuth();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://localhost/api/users/me");
        console.log(response);
        const u = {
          username: response.data.username,
          email: response.data.email,
        };
        setUser(u);
      } catch (error) {
        console.error("An error occurred while fetching data:", error);
        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
            forceLogout(setIsLoggedIn);
          }
      }
    };

    fetchData();
  }, []); // 当`isLoggedIn`或`product.product_id`发生变化时再次运行`useEffect`

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
        {user && (
          <>
            <Typography component="h1" variant="h5">
              My Profile
            </Typography>

            <Typography component="h2" variant="body1" sx={{ mt: 2 }}>
              Username: {user.username}
            </Typography>
            <Typography component="h2" variant="body1" sx={{ mt: 2 }}>
              Email: {user.email}
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default ProfilePage;
