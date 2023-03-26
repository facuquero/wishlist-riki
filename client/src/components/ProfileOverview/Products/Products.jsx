import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const productMocks = [
  {
    id: "MLA43434",
    name: "Play Station 5",
    quantity: 2,
    img: "https://www.naldo.com.ar/medias/504562-5-515Wx515H?context=bWFzdGVyfHJvb3R8NjU3ODA0OHxpbWFnZS9qcGVnfGg5ZS9oZmUvOTU1MDA3MjkwNTc1OC5qcGd8Yzc3ZDk3MGNkYTdhYzg1NDNlYTMxYjQ1N2JlZjhmODYxMTcxMjlkYjI2MWY2NWE3MTQwNTRhNWMzYmI0OWNkOQ",
  },
  {
    id: "MLA43434",
    name: "Play Station 5",
    quantity: 2,
    img: "https://www.naldo.com.ar/medias/504562-5-515Wx515H?context=bWFzdGVyfHJvb3R8NjU3ODA0OHxpbWFnZS9qcGVnfGg5ZS9oZmUvOTU1MDA3MjkwNTc1OC5qcGd8Yzc3ZDk3MGNkYTdhYzg1NDNlYTMxYjQ1N2JlZjhmODYxMTcxMjlkYjI2MWY2NWE3MTQwNTRhNWMzYmI0OWNkOQ",
  },
  {
    id: "MLA43434",
    name: "Play Station 5",
    quantity: 2,
    img: "https://www.naldo.com.ar/medias/504562-5-515Wx515H?context=bWFzdGVyfHJvb3R8NjU3ODA0OHxpbWFnZS9qcGVnfGg5ZS9oZmUvOTU1MDA3MjkwNTc1OC5qcGd8Yzc3ZDk3MGNkYTdhYzg1NDNlYTMxYjQ1N2JlZjhmODYxMTcxMjlkYjI2MWY2NWE3MTQwNTRhNWMzYmI0OWNkOQ",
  },
  {
    id: "MLA43434",
    name: "Play Station 5",
    quantity: 2,
    img: "https://www.naldo.com.ar/medias/504562-5-515Wx515H?context=bWFzdGVyfHJvb3R8NjU3ODA0OHxpbWFnZS9qcGVnfGg5ZS9oZmUvOTU1MDA3MjkwNTc1OC5qcGd8Yzc3ZDk3MGNkYTdhYzg1NDNlYTMxYjQ1N2JlZjhmODYxMTcxMjlkYjI2MWY2NWE3MTQwNTRhNWMzYmI0OWNkOQ",
  },
];

const Products = () => {
  return (
    <Box
      sx={{
        boxShadow: "0 4px 6px rgba(50,50,93,.30), 0 1px 3px rgba(0,0,0,.28)",
        backgroundColor: "#cccc",
        borderRadius: 1,
      }}
    >
      <Typography
        variant="h5"
        sx={{ fontFamily: "Poppins", p: 2, fontWeight: 600 }}
      >
        Tus productos seleccionados como favoritos
      </Typography>
      {productMocks.map((product) => (
        <Box sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs={12} lg={6}>
              <ProductCard
                id={product.id}
                name={product.name}
                quantity={product.quantity}
                img={product.img}
              />
            </Grid>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default Products;
