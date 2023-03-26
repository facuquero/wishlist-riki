import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useNavigate } from "react-router-dom";

const FormularioSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      "Solo se permiten letras"
    )
    .required("El nombre es obligatorio"),
  dni: Yup.string()
    .matches(/^\d{7,8}$/, "El DNI debe tener 7 u 8 números")
    .required("El DNI es obligatorio"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  telefono: Yup.string(),
  contraseña: Yup.string()
    .required("La contraseña es obligatoria")
    .min(4, "La contraseña debe tener más de 4 caracteres"),
  direccion: Yup.string().required("La dirección es obligatoria"),
  termsAndConditions: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los Términos y Condiciones"
  ),
});

const RegisterForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  const navigate = useNavigate();
  return (
    <Box
      flexDirection="column"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#4f5bd5",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: isMobile ? "70%" : 800,
          boxShadow: isMobile
            ? "none"
            : "0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: 2,
          borderRadius: 5,
          backgroundColor: "#ffff",
          maxHeight: isMobile ? "100%" : 1000,
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <img
            src={
              "https://instasorteos.com/assets/img/logo/instasorteos-login.svg"
            }
            alt=""
            style={{ cursor: "pointer" }}
            onClick={() => navigate({ pathname: "/" })}
          />
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Poppins",
              color: "#4f5bd5",
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            Regístrate para poder crear tu lista de regalos
          </Typography>
        </Box>
        <Formik
          initialValues={{
            nombre: "",
            dni: "",
            email: "",
            telefono: "",
            direccion: "",
            termsAndConditions: false,
            contraseña: "",
          }}
          validationSchema={FormularioSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%" }}>
              <Box sx={{ my: 2 }}>
                <Field name="nombre">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Nombre completo"
                      variant="outlined"
                      {...field}
                      error={errors.nombre && touched.nombre}
                      InputProps={{
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          borderRadius: 10,
                        },
                        "& .MuiFormLabel-root": {
                          fontFamily: "Poppins",
                        },
                      }}
                      size="small"
                    />
                  )}
                </Field>
                {errors.nombre && touched.nombre ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.nombre}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="dni">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="DNI"
                      variant="outlined"
                      {...field}
                      error={errors.dni && touched.dni}
                      InputProps={{
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: "Poppins",
                          borderRadius: 10,
                        },
                        "& .MuiFormLabel-root": {
                          fontFamily: "Poppins",
                        },
                      }}
                      size="small"
                    />
                  )}
                </Field>
                {errors.dni && touched.dni ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.dni}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="email">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      {...field}
                      error={errors.email && touched.email}
                      InputProps={{
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: "Poppins",
                          borderRadius: 10,
                        },
                        "& .MuiFormLabel-root": {
                          fontFamily: "Poppins",
                        },
                      }}
                      size="small"
                    />
                  )}
                </Field>
                {errors.email && touched.email ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.email}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="contraseña">
                  {({ field }) => (
                    <TextField
                      type="password"
                      fullWidth
                      label="Contraseña"
                      variant="outlined"
                      {...field}
                      error={errors.contraseña && touched.contraseña}
                      InputProps={{
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: "Poppins",
                          borderRadius: 10,
                        },
                        "& .MuiFormLabel-root": {
                          fontFamily: "Poppins",
                        },
                      }}
                      size="small"
                    />
                  )}
                </Field>
                {errors.contraseña && touched.contraseña ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.contraseña}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="telefono">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Teléfono"
                      variant="outlined"
                      {...field}
                      error={errors.telefono && touched.telefono}
                      InputProps={{
                        style: {
                          fontFamily: "Poppins",
                        },
                      }}
                      sx={{
                        fieldset: {
                          borderWidth: 2,
                          fontFamily: "Poppins",
                          borderRadius: 10,
                        },
                        "& .MuiFormLabel-root": {
                          fontFamily: "Poppins",
                        },
                      }}
                      size="small"
                    />
                  )}
                </Field>
                {errors.telefono && touched.telefono ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.telefono}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="direccion">
                  {({ field }) => (
                    <Box sx={{ display: "flex" }}>
                      <TextField
                        fullWidth
                        label="Dirección"
                        variant="outlined"
                        {...field}
                        error={errors.direccion && touched.direccion}
                        InputProps={{
                          style: {
                            fontFamily: "Poppins",
                          },
                        }}
                        sx={{
                          fieldset: {
                            borderWidth: 2,
                            fontFamily: "Poppins",
                            borderRadius: 10,
                          },
                          "& .MuiFormLabel-root": {
                            fontFamily: "Poppins",
                          },
                        }}
                        size="small"
                      />
                      <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Box>
                          <Tooltip
                            title={
                              <Typography
                                variant="body2"
                                sx={{ fontFamily: "Poppins" }}
                              >
                                Necesitamos una dirección donde enviar el regalo
                              </Typography>
                            }
                            PopperProps={{
                              disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            sx={{ fontFamily: "Poppins" }}
                          >
                            <HelpOutlineIcon
                              sx={{
                                mt: 1,
                                ml: 1,
                                color: "#4f5bd5",
                                width: "100%",
                                cursor: "pointer",
                              }}
                              onClick={handleTooltipOpen}
                            />
                          </Tooltip>
                        </Box>
                      </ClickAwayListener>
                    </Box>
                  )}
                </Field>
                {errors.direccion && touched.direccion ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.direccion}
                  </div>
                ) : null}
              </Box>
              <Box>
                <Field
                  type="checkbox"
                  name="termsAndConditions"
                  as={FormControlLabel}
                  control={<Checkbox />}
                  label={
                    <Typography variant="body2" sx={{ fontFamily: "Poppins" }}>
                      Estoy de acuerdo con los términos y condiciones
                    </Typography>
                  }
                />
                {errors.termsAndConditions && touched.termsAndConditions ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.termsAndConditions}
                  </div>
                ) : null}
              </Box>

              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ width: "100%", textTransform: "none" }}
              >
                <Typography variant="subtitle1" sx={{ fontFamily: "Poppins" }}>
                  Enviar
                </Typography>
              </Button>
            </Form>
          )}
        </Formik>
        <Box
          sx={{ py: 1, cursor: "pointer" }}
          onClick={() => navigate({ pathname: "/login" })}
        >
          <Typography variant="span" sx={{ fontFamily: "Poppins" }}>
            ¿Ya tienes una cuenta?{" "}
          </Typography>
          <Typography
            variant="span"
            sx={{ fontFamily: "Poppins", fontWeight: 700 }}
          >
            Iniciar sesión
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterForm;
