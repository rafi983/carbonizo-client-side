import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Rating from "react-rating";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  useEffect(() => {
    fetch("https://quiet-hamlet-36668.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setSpinnerLoading(true);
      });
  }, []);

  return (
    <>
      {spinnerLoading ? (
        <Container>
          <h1 style={{ textAlign: "center", marginTop: "6rem" }}>
            Here is our customer reviews
          </h1>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {reviews?.map((review) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={review?._id}>
                <Card sx={{ minHeight: 320, mt: 3, py: 3 }}>
                  <CardMedia
                    component="img"
                    height="260"
                    image={review?.img}
                    sx={{
                      borderRadius: "50%",
                      width: "100px",
                      height: "100px",
                      margin: "0 auto",
                    }}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="div"
                      sx={{ fontWeight: 600, textAlign: "center" }}
                    >
                      {review?.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{ fontWeight: 600, textAlign: "center" }}
                    >
                      {review?.designation}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 600, textAlign: "center" }}
                      color="text.secondary"
                    >
                      {review?.review}
                    </Typography>
                    <Typography
                      sx={{ textAlign: "center", mt: 3, color: "gold" }}
                    >
                      <Rating
                        initialRating={review?.rate}
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                      />
                    </Typography>
                  </CardContent>
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

export default Reviews;
