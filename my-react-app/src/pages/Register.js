import React, { useState } from "react";
import { Container, Typography, Paper, Alert } from "@mui/material";
import RegisForm from "../components/RegisForm";
function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 这里模拟了一个简单的验证。在实际应用中，你需要与后端API交互来验证数据。
    if (
      formData.username === "existingUser" ||
      formData.email === "existingEmail@example.com"
    ) {
      setError("Username or email already exists.");
      return;
    }

    // 提交表单数据到服务器进行注册...
    console.log("Registration data submitted:", formData);
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
        {error && (
          <Alert severity="error" sx={{ width: "100%", mt: 2 }}>
            {error}
          </Alert>
        )}
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
