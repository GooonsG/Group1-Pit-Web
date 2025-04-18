import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import { AccountCircle, Lock } from "@mui/icons-material";
import logo from "../img/logoustp.png";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundColor: "#f5f5f5",
  padding: "2rem",
  background: `
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('./img/ustpbg.jpg') center/cover no-repeat
  `,
  color: "black",
});

const LoginForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  width: "100%",
  maxWidth: "400px",
  backgroundColor: "white",
  padding: "2rem",
  borderRadius: "1px",
  boxShadow: "10px 10px 0px 0px rgba(31, 27, 79, 100)",
});

const LoginButton = styled(Button)({
  padding: "12px",
  fontWeight: "bold",
  textTransform: "none",
  backgroundColor: "#F9BF3B",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#E0AC33",
  },
});

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));

    // Validate credentials
    if (userProfile && userProfile.username === username && userProfile.password === password) {
      localStorage.setItem("isAuthenticated", "true"); // Mark user as authenticated
      navigate("/"); // Redirect to homepage
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Box display="flex" justifyContent="center" mb={2}>
          <img
            src={logo}
            alt="Ustp Logo"
            width="70px"
            height="70px"
            className="App-logo-spin"
          />
        </Box>
        <Typography variant="h6" component="h5" className="mb-8 text-gray-800 text-base text-center">
          Login to your account
        </Typography>

        {error && (
          <Typography variant="body2" color="error" className="text-center">
            {error}
          </Typography>
        )}

        <TextField
          label="Username"
          value={username}
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(31, 27, 79, 1)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(31, 27, 79, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(31, 27, 79, 1)",
              },
            },
          }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(31, 27, 79, 1)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(31, 27, 79, 0.8)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "rgba(31, 27, 79, 1)",
              },
            },
          }}
        />

        <LoginButton variant="contained" color="primary" type="submit">
          Login
        </LoginButton>

        <Typography variant="body2" className="text-center mt-2">
          I forgot my password{" "}
          <Link href="#" className="text-blue-600 hover:text-blue-800">
            Click here to reset
          </Link>
        </Typography>

        <Typography variant="body2" className="text-center mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-800">
            Register New Account
          </Link>
        </Typography>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;