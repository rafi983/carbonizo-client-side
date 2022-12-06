import React, { useState } from "react";
import NavMenu from "../NavMenu/NavMenu";
import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import register from "../../images/register.png";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [registerData, setRegisterData] = useState({});
  const history = useHistory();
  const location = useLocation();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newRegisterData = { ...registerData };
    newRegisterData[field] = value;
    setRegisterData(newRegisterData);
  };
  const handleRegisterSubmit = (e) => {
    if (registerData.password !== registerData.password2) {
      alert("Your password did not match");
      return;
    }
    registerUser(
      registerData.email,
      registerData.password,
      registerData.name,
      location,
      history
    );
    e.preventDefault();
  };

  return (
    <div>
      <NavMenu />
      <Container>
        <Typography variant="h4" sx={{ my: 4, fontWeight: 600 }} gutterBottom>
          Register
        </Typography>

        <Grid
          container
          spacing={2}
          sx={{
            height: "400px",
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={12} lg={6}>
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                required
                onBlur={handleOnBlur}
                type="email"
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="ReType Your Password"
                type="password"
                name="password2"
                required
                onBlur={handleOnBlur}
                variant="standard"
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already Registered? Please Login</Button>
              </NavLink>
            </form>
            {isLoading && <CircularProgress />}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>

          <Grid item xs={12} sm={12} lg={6}>
            <img src={register} width="100%" alt="" />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default Register;
