import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  Container,
  Grid,
  LinearProgress,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Explore = () => {
  const [allCars, setAllCars] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  useEffect(() => {
    fetch("https://quiet-hamlet-36668.herokuapp.com/allcars")
      .then((res) => res.json())
      .then((data) => {
        setAllCars(data);
        setSpinnerLoading(true);
      });
  }, []);

  return (
    <div>
      <NavMenu />
      {spinnerLoading ? (
        <Container>
          <h1 style={{ textAlign: "center", marginTop: "5rem" }}>our cars</h1>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {allCars?.map((car) => (
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
      <Footer />
    </div>
  );
};

export default Explore;
