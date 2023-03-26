import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const ProductCard = (props) => {
  return (
    <Box
      sx={{ borderRadius: 1, backgroundColor: "#ffff", padding: 2, height: 120 }}
      key={props.id}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={4}>
          <img src={props.img} alt="" style={{ width: 100, height: 100 }} />
          <Typography
            variant="body1"
            sx={{ color: "#4f5bd5", fontFamily: "Poppins" }}
          >
            Ref. {props.id}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            variant="body1"
            sx={{ color: "#4f5bd5", fontFamily: "Poppins" }}
          >
            {props.name}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Typography
            variant="body1"
            sx={{ color: "#4f5bd5", fontFamily: "Poppins" }}
          >
            Cantidad: {props.quantity}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCard;
