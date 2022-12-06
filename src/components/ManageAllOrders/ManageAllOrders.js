import React, { useEffect, useState } from "react";
import { CircularProgress, Container, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [spinnerLoading, setSpinnerLoading] = useState(false);

  useEffect(() => {
    fetch("https://quiet-hamlet-36668.herokuapp.com/allorders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
        setSpinnerLoading(true);
      });
  }, [allOrders]);

  const handleStatus = (id) => {
    fetch(`https://quiet-hamlet-36668.herokuapp.com/allorders/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        status: allOrders[0]?.status,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("status updated");
        }
      });
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://quiet-hamlet-36668.herokuapp.com/allorders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("deleted successfully");
          const remainingOrders = allOrders.filter((order) => order._id !== id);
          setAllOrders(remainingOrders);
        });
    }
  };

  return (
    <>
      {spinnerLoading ? (
        <Container>
          <h1 style={{ textAlign: "center" }}>All orders</h1>
          <Grid container spacing={2} sx={{ mt: 5 }}>
            {allOrders?.map((car) => (
              <Grid item xs={12} sm={12} md={6} lg={4} key={car?._id}>
                <Card sx={{ minHeight: 750, pb: 5, mt: 3 }}>
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

                    <Typography
                      variant="body1"
                      sx={{ mt: 3, fontWeight: 500, color: "#301934" }}
                    >
                      Ordered By: <br />
                      Name: {car?.data?.name} <br /> Email: {car?.email}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      onClick={() => handleStatus(car?._id)}
                    >
                      Update status
                    </Button>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                        backgroundColor: "#301934",
                        color: "#fff",
                        padding: ".5rem 0.7rem",
                        borderRadius: ".5rem",
                        marginLeft: "5rem",
                      }}
                    >
                      {car?.status}
                    </Typography>
                  </CardActions>
                  <Button
                    variant="contained"
                    sx={{ ml: 1 }}
                    onClick={() => handleDelete(car?._id)}
                  >
                    Delete
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <CircularProgress style={{ margin: "10rem 40rem" }} />
      )}
    </>
  );
};

export default ManageAllOrders;
