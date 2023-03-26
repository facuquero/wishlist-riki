import { Box, Grid } from "@mui/material";
import React from "react";
import Products from "./Products/Products";

const ProfileOverview = () => {
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#4f5bd5", padding: 10 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} lg={4}>
          <div>Sarasa</div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Products />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileOverview;
