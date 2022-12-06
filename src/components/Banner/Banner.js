import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import "./Banner.css";
import { useHistory } from "react-router-dom";

const Banner = () => {
  const history = useHistory();

  const handleClickExplore = () => {
    history.push("/explore");
  };
  return (
    <div
      className="banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h4"
        className="banner-title"
        sx={{
          color: "#fff",
          fontWeight: 600,
          fontSize: "3rem",
          textAlign: "center",
        }}
      >
        Best Car Dealer in the market.
        <br /> Get your car at the price you manage
      </Typography>
      <Button variant="contained" sx={{ mt: 3 }} onClick={handleClickExplore}>
        View All Cars
      </Button>
    </div>
  );
};

export default Banner;
