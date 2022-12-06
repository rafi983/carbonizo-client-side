import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import login from "../../images/login.png";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <div>
      <NavMenu />
      <Container
        sx={{
          height: "500px",
        }}
      >
        <Typography variant="h4" sx={{ mt: 4, fontWeight: 600 }} gutterBottom>
          Login
        </Typography>
        <Grid container spacing={2} sx={{ alignItems: "center" }}>
          <Grid item xs={12} sm={12} lg={6}>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                type="email"
                name="email"
                onChange={handleOnChange}
                required
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onChange={handleOnChange}
                required
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/register">
                <Button variant="text">
                  New To Carbonizo? Please Register
                </Button>
              </NavLink>
            </form>
            {isLoading && <CircularProgress />}
            {user?.email && user?.emailVerified && (
              <Alert severity="success">Login successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>

          <Grid item xs={12} sm={12} lg={6}>
            <img src={login} width="100%" alt="" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
