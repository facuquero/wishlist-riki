import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const isLogged = true;

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#ffff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <img
              src={
                "https://instasorteos.com/assets/img/logo/instasorteos-logo.svg"
              }
              alt=""
              style={{ width: 150 }}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link activeClass="active" smooth spy to="stepper">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "grey",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    Características
                  </Typography>
                </MenuItem>
              </Link>
              <Link activeClass="active" smooth spy to="faq">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: "grey",
                      fontFamily: "Poppins",
                      fontWeight: 600,
                    }}
                  >
                    Preguntas frecuentes
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Link activeClass="active" smooth spy to="stepper">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 20,
                  color: "grey",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Características
              </Button>
            </Link>
            <Link activeClass="active" smooth spy to="faq">
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 20,
                  color: "grey",
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 600,
                }}
              >
                Preguntas frecuentes
              </Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {isLogged ? (
              <>
                <Tooltip title="Configuración">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      navigate({ pathname: "/profile" });
                    }}
                  >
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: "Poppins" }}
                    >
                      Perfil
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      sx={{ fontFamily: "Poppins" }}
                    >
                      Cerrar sesión
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate({ pathname: "/login" })}
              >
                <Typography variant="subtitle1" sx={{ fontFamily: "Poppins" }}>
                  Ingresar
                </Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
