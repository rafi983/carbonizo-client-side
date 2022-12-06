import React from "react";
import { Container, Grid } from "@mui/material";
import reviewPic from "../../images/review.png";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";

const MyReview = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    fetch(`https://carbonizo-server-side.onrender.com/reviews`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        alert("review added successfully");
        reset();
      }
    });
  };

  return (
    <>
      <div>
        <Container>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} sm={12} lg={6}>
              <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <input
                  defaultValue={
                    "https://i.ibb.co/9HCkRjW/undraw-male-avatar-323b.png"
                  }
                  {...register("img")}
                />

                <input
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                  {...register("name")}
                  required
                />

                <input
                  defaultValue={user?.email}
                  {...register("email")}
                  required
                />

                <input
                  defaultValue={""}
                  placeholder="Designation"
                  {...register("designation")}
                  required
                />

                <input
                  type="number"
                  defaultValue=""
                  placeholder="give a rating"
                  {...register("rate")}
                  required
                />

                <textarea
                  defaultValue={""}
                  rows={5}
                  cols={53}
                  className="mt-4"
                  placeholder="Put your review"
                  {...register("review")}
                  required
                ></textarea>
                <input type="submit" value="Add review" />
              </form>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <img src={reviewPic} width="100%" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default MyReview;
