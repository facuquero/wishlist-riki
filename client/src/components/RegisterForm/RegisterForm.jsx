import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Button,
  Checkbox,
  CircularProgress,
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
import { useMutation } from "react-query";
import { createUser } from "../../api/createUser";
import Swal from "sweetalert2";

const FormularioSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "El nombre debe tener al menos 4 caracteres")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      "Solo se permiten letras"
    )
    .required("El nombre es obligatorio"),
  lastname: Yup.string()
    .min(4, "El apellido debe tener al menos 4 caracteres")
    .matches(
      /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g,
      "Solo se permiten letras"
    )
    .required("El nombre es obligatorio"),
  DNI: Yup.string()
    .matches(/^\d{7,8}$/, "El DNI debe tener 7 u 8 números")
    .required("El DNI es obligatorio"),
  email: Yup.string()
    .email("El email no es válido")
    .required("El email es obligatorio"),
  phone_number: Yup.string(),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(4, "La contraseña debe tener más de 4 caracteres"),
  zip_code: Yup.string()
    .matches(/^\d{3,5}$/, "El código postal debe tener 3 o 5 números")
    .min(3, "El código postal debe tener más de 4 caracteres"),
  shipping_address: Yup.string().required("La dirección es obligatoria"),
  username: Yup.string().required("El nombre de usuario es obligatorio"),
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
  const registerMutation = useMutation(createUser, {
    onSuccess: () => {
      Swal.fire({
        title: "Usuario creado",
        text: `Te enviaremos un mail con un código de confirmación para terminar el registro`,
        icon: "success",
        confirmButtonText: "Cool",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/password-validator");
        }
      });
    },
    onError: (data) => {
      Swal.fire({
        title: "Error",
        text: data.response.data.message,
        icon: "error",
        confirmButtonText: "Volver a intentar",
      });
    },
  });
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
            name: "",
            DNI: "",
            email: "",
            phone_number: "",
            shipping_address: "",
            termsAndConditions: false,
            password: "",
            username: "",
            lastname: "",
            zip_code: null,
          }}
          validationSchema={FormularioSchema}
          onSubmit={(values, { setSubmitting }) => {
            const { termsAndConditions, ...rest } = values;
            registerMutation.mutate(rest);
            setSubmitting(false);
          }}
        >
          {({ errors, touched }) => (
            <Form style={{ width: "100%" }}>
              <Box sx={{ my: 2 }}>
                <Field name="name">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Nombre"
                      variant="outlined"
                      {...field}
                      error={errors.name && touched.name}
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
                {errors.name && touched.name ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.name}
                  </div>
                ) : null}
              </Box>
              <Box sx={{ my: 2 }}>
                <Field name="lastname">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Apellido"
                      variant="outlined"
                      {...field}
                      error={errors.lastname && touched.lastname}
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
                {errors.lastname && touched.lastname ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.lastname}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="username">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Nombre de usuario"
                      variant="outlined"
                      {...field}
                      error={errors.username && touched.username}
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
                {errors.username && touched.username ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.username}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="DNI">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="DNI"
                      variant="outlined"
                      {...field}
                      error={errors.DNI && touched.DNI}
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
                {errors.DNI && touched.DNI ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.DNI}
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
                <Field name="password">
                  {({ field }) => (
                    <TextField
                      type="password"
                      fullWidth
                      label="Contraseña"
                      variant="outlined"
                      {...field}
                      error={errors.password && touched.password}
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
                {errors.password && touched.password ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.password}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="phone_number">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Teléfono"
                      variant="outlined"
                      {...field}
                      error={errors.phone_number && touched.phone_number}
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
                {errors.phone_number && touched.phone_number ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.phone_number}
                  </div>
                ) : null}
              </Box>

              <Box sx={{ my: 2 }}>
                <Field name="shipping_address">
                  {({ field }) => (
                    <Box sx={{ display: "flex" }}>
                      <TextField
                        fullWidth
                        label="Dirección"
                        variant="outlined"
                        {...field}
                        error={
                          errors.shipping_address && touched.shipping_address
                        }
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
                {errors.shipping_address && touched.shipping_address ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.shipping_address}
                  </div>
                ) : null}
              </Box>
              <Box sx={{ my: 2 }}>
                <Field name="zip_code">
                  {({ field }) => (
                    <TextField
                      fullWidth
                      label="Código postal"
                      variant="outlined"
                      {...field}
                      error={errors.zip_code && touched.zip_code}
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
                {errors.DNI && touched.DNI ? (
                  <div style={{ color: "red", fontFamily: "Poppins" }}>
                    {errors.DNI}
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
                disabled={registerMutation.isLoading ? true : false}
              >
                <Typography variant="subtitle1" sx={{ fontFamily: "Poppins" }}>
                  {registerMutation.isLoading ? <CircularProgress /> : "Enviar"}
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
