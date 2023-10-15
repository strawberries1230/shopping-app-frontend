import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
function ProfilePage() {
    // 示例数据，你可以从API或其他数据源获取
    const user = {
      username: "JohnDoe123",
      email: "johndoe@example.com"
    };
  
    return (
      <Container component="main" maxWidth="xs">
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: 3,
            mt: 8
          }}
        >
          <Typography component="h1" variant="h5">
            My Profile
          </Typography>
          <Typography component="h2" variant="body1" sx={{ mt: 2 }}>
            Username: {user.username}
          </Typography>
          <Typography component="h2" variant="body1" sx={{ mt: 2 }}>
            Email: {user.email}
          </Typography>
        </Paper>
      </Container>
    );
  }
  
  export default ProfilePage;
  