import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { renderSVG } from "../helpers/renderSVG";
import NotFoundSVG from "../lotties/notFound.json";

const NotFound = () => {
  const notFoundSVG = renderSVG(NotFoundSVG);
  return (
    <>
      <Navbar />
      <Box sx={{ textAlign: "center", padding: 10 }}>
        <Lottie options={notFoundSVG} height={300} width={300} />
        <Typography variant="h4" sx={{ fontFamily: "Poppins" }}>
          Parece que esta página no existe, no esté disponible o se haya
          eliminado.
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: "Poppins" }}>
          <Link to="/">Volver a Wishlist</Link>
        </Typography>
      </Box>
    </>
  );
};

export default NotFound;
