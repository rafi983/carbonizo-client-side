import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, CircularProgress } from "@mui/material";

const ManageProducts = () => {
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

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      fetch(`https://quiet-hamlet-36668.herokuapp.com/allcars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert("deleted successfully");
          const remainingCars = allCars.filter((car) => car._id !== id);
          setAllCars(remainingCars);
        });
    }
  };

  return (
    <>
      {spinnerLoading ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product Id</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allCars.map((car) => (
                <TableRow
                  key={car?._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {car?._id}
                  </TableCell>
                  <TableCell align="left">{car?.name}</TableCell>
                  <TableCell align="left">{car?.description}</TableCell>
                  <TableCell align="left">{car?.price} $</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      onClick={() => handleDelete(car?._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <CircularProgress style={{ margin: "10rem 40rem" }} />
      )}
    </>
  );
};

export default ManageProducts;
