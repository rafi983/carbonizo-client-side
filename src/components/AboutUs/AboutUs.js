import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import aboutPic from "../../images/about-us.jpg";
const AboutUs = () => {
  return (
    <div>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ my: 5 }}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Grid item xs={12} sm={12} md={5} lg={5}>
            <img src={aboutPic} style={{ width: "100%" }} alt="" />
          </Grid>

          <Grid item xs={1} sm={1} md={1} lg={1}></Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, fontSize: "2.5rem" }}
            >
              Carbonizo is the best place <br /> to get your dream car
            </Typography>

            <Typography
              variant="h6"
              sx={{ mt: 3, fontWeight: 400, color: "darkgrey" }}
            >
              Carbonizo is a car dealing company where car lovers can find cars
              to meet their own expectations. There are no luxury cars in the
              world which u won't find here. Buyers can choose what they want
              from us.
            </Typography>
            <Button variant="contained" sx={{ mt: 3 }}>
              About Us
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
