import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        marginTop: "10rem",
        height: "350px",
        backgroundColor: "#900C3F",
        color: "#fff",
        width: "100%",
        padding: "5rem 0",
      }}
    >
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={5}>
            <Typography variant="h4">About Carbonizo</Typography>
            <Typography variant="body1">
              We are a car dealer of different sports car along with normal
              sedan car.Buyers can choose thier car at their comfort budget.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <Typography variant="h4">Contact Us</Typography>

            <Typography variant="body1">
              You can make touch with us at any time for any car purchase at
              your budget price.
            </Typography>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-phone"></i>
                <span style={{ marginLeft: ".5rem" }}>+01 (977) 2599 12</span>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-envelope"></i>
                <span style={{ marginLeft: ".9rem" }}>carbonizo@gmail.com</span>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-map-marker-alt"></i>
                <span style={{ marginLeft: "1rem" }}>Dubai, UAE</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={3}>
            <Typography variant="h4">Subscribe Us</Typography>
            <Typography variant="body1">
              You can subscribe for updates
            </Typography>
            <input
              type="email"
              style={{
                padding: "1rem 2rem",
                margin: "1rem 0",
                border: "none",
                backgroundColor: "#f2f2f2",
              }}
              placeholder="Your Email"
            />
            <Button variant="contained">Subscribe Now</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
