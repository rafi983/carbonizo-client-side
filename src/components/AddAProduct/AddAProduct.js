import React from "react";
import addCarImg from "../../images/addCarImg.png";
import { Container, Grid } from "@mui/material";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer/Footer";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`https://quiet-hamlet-36668.herokuapp.com/allcars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res) {
        console.log(res);
        alert("CAR added successfully");
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
                  defaultValue={""}
                  placeholder="car image URL"
                  {...register("img")}
                  required
                />

                <input
                  defaultValue={""}
                  placeholder="car Name"
                  {...register("name")}
                  required
                />

                <input
                  type="number"
                  defaultValue=""
                  placeholder="Price"
                  {...register("price")}
                  required
                />
                {errors.email && (
                  <span className="error">This field is required</span>
                )}

                <textarea
                  defaultValue={""}
                  rows={5}
                  cols={53}
                  className="mt-4"
                  placeholder="car description"
                  {...register("description")}
                  required
                ></textarea>
                <input type="submit" value="Add car" />
              </form>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <img src={addCarImg} width="100%" />
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default AddAProduct;
