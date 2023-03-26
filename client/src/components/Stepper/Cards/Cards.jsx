import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Lottie from "react-lottie";
import Form from "../../../lotties/form.json";
import Integration from "../../../lotties/integration.json";
import Cart from "../../../lotties/cart.json";
import Share from "../../../lotties/share.json";
import { renderSVG } from "../../../helpers/renderSVG";
import { useTheme } from "@mui/material/styles";

const Cards = () => {
  const theme = useTheme();
  const CartIcon = renderSVG(Cart);
  const ShareIcon = renderSVG(Share);
  const IntegrationIcon = renderSVG(Integration);
  const FormIcon = renderSVG(Form);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction="row"
      spacing={isMobile ? 4 : 8}
      padding={isMobile ? 0 : 10}
    >
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            borderRadius: isMobile ? 0 : 5,
            backgroundColor: "#4f5bd5",
            width: isMobile ? "100%" : 400,
          }}
        >
          <Lottie options={CartIcon} height={150} width={150}></Lottie>
          <h2
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Nombra a tu wishlist para reconocerla
          </h2>
          <Typography
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              padding: 10,
            }}
          >
            Personaliza el nombre de tu wishlist así los demás pueden
            encontrarla.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            borderRadius: isMobile ? 0 : 5,
            backgroundColor: "#4f5bd5",
            width: isMobile ? "100%" : 400,
          }}
        >
          <Lottie options={FormIcon} height={150} width={150}></Lottie>
          <h2
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Registrate de manera fácil y gratis
          </h2>
          <Typography
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              padding: 10,
            }}
          >
            Coloca tus datos para poder enviar tus productos a tu domicilio.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            borderRadius: isMobile ? 0 : 5,
            backgroundColor: "#4f5bd5",
            width: isMobile ? "100%" : 400,
          }}
        >
          <Lottie options={IntegrationIcon} height={150} width={150}></Lottie>
          <h2
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Importa tu lista vinculando tu cuenta
          </h2>
          <Typography
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              padding: 10,
            }}
          >
            Utiliza las plataformas de e-commerce para importar tus productos.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={3}>
        <Box
          sx={{
            borderRadius: isMobile ? 0 : 5,
            backgroundColor: "#4f5bd5",
            width: isMobile ? "100%" : 400,
          }}
        >
          <Lottie options={ShareIcon} height={150} width={200}></Lottie>
          <h2
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Compartela en tus redes sociales
          </h2>
          <Typography
            style={{
              color: "#ffff",
              fontFamily: "Poppins",
              padding: 10,
            }}
          >
            Publica Stories en Instagram, Facebook o el link de tu wishlist.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cards;
