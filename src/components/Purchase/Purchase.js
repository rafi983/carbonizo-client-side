import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import "./Purchase.css";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [singleCar, setSingleCar] = useState({});
  useEffect(() => {
    fetch(`https://carbonizo-server-side.onrender.com/allcars/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleCar(data));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    fetch("https://quiet-hamlet-36668.herokuapp.com/myorders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        img: singleCar?.img,
        name: singleCar?.name,
        description: singleCar?.description,
        price: singleCar?.price,
        email: data.email,
        status: "pending",
        data,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("ordered successfully");
        }
      });
  };

  return (
    <>
      <NavMenu />
      <Container sx={{ minHeight: "400px" }}>
        <Grid container spacing={2} sx={{ mt: 5, alignItems: "center" }}>
          <Grid item xs={12} sm={12} lg={8}>
            <Grid container spacing={2} sx={{ alignItems: "center" }}>
              <Grid item xs={12} sm={12} lg={6}>
                <Typography variant="h4" sx={{ fontWeight: 600, my: 3 }}>
                  {singleCar?.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {singleCar?.description}
                </Typography>
                <Typography variant="h4">
                  Price: {singleCar?.price} $
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} lg={6}>
                <img
                  src={singleCar?.img}
                  width="100%"
                  style={{ border: "8px solid black" }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} lg={1}></Grid>
          <Grid item xs={12} sm={12} lg={3}>
            <form
              className="shipping-form"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <input
                defaultValue={user.displayName}
                placeholder="Your name"
                {...register("name")}
              />
              <input
                defaultValue={user.email}
                placeholder="Email..."
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="error">This field is required</span>
              )}

              <input defaultValue="" placeholder="city" {...register("city")} />

              <input
                defaultValue=""
                placeholder="address"
                {...register("address")}
              />
              <input
                type="number"
                defaultValue=""
                placeholder="phone"
                {...register("phone")}
              />
              <textarea
                rows={5}
                cols={53}
                className="mt-4"
                placeholder="Description"
              ></textarea>
              <input type="submit" value="Place Order" />
            </form>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Purchase;
