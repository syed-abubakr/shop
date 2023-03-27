import React from "react";
import Product from "./Product";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function Productgrid({ data, setdetail }) {
  return (
      <Container>
        <Grid container spacing={3} marginTop={1}>
          {data.map((post) => (
            <Grid item xs={6} md={6} lg={4}>
              <Product
              data = {post}
              setdetail = {setdetail}
               />
            </Grid>
          ))}
        </Grid>
      </Container>
  );
}
