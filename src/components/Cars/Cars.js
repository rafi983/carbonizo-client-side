import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  useEffect(() => {
    fetch("https://carbonizo-server-side.onrender.com/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
        setSpinnerLoading(true);
      });
  }, []);

  return (
    <>
      {spinnerLoading ? (
        <Container>
          <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
            Some of our latest cars
          </h1>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {cars?.map((car) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={car?._id}>
                <Card sx={{ minHeight: 580, mt: 3 }}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={car?.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 600 }}
                    >
                      {car?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {car?.description}
                    </Typography>

                    <Typography variant="h4" sx={{ mt: 3 }}>
                      Price: {car?.price} $
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={`/purchase/${car?._id}`}>
                      <Button variant="contained">Buy Now</Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <CircularProgress style={{ margin: "10rem 45rem" }} />
      )}
    </>
  );
};

export default Cars;
