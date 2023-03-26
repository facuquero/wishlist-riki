import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Cards from "./Cards/Cards";

const Stepper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ height: "100%" }} id="stepper">
      <Box sx={{ width: "100%" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            color: "#4f5bd5",
            fontWeight: 800,
            padding: isMobile ? 2 : 10,
            margin: "auto",
            textAlign: "center",
          }}
        >
          Wishlist te permite compartir tus regalos, de manera rápida, fácil y
          gratis.
        </Typography>
      </Box>

      <Cards />
    </Box>
  );
};

export default Stepper;
