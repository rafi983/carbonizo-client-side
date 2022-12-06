import React from "react";
import notfound from "../../images/notfound.jpg";
import { Button } from "@mui/material";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const handleGoHome = () => {
    history.push("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={notfound} width="600px" />

      <Button variant="contained" onClick={handleGoHome}>
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
