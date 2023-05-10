import { Box, useTheme } from '@mui/material'
import LoginButton from '../LoginButton'
import { SpecialLoginButton } from '../commons/SpecialButtons'
import useAuth from '../../hooks/useAuth'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles'

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiMenu-paper': {
    background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
  },
}))

const HamburgueMenu = () => {
  const { auth, logOut } = useAuth()
  const navigate = useNavigate()
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickOptions = ({ goTo }) => {
    const options = {
      miFiumbi: () => navigate(`/${auth.username}`),
      options: () => navigate(`/${auth.username}/userConfig`),
      logOut: () => logOut(),
    }
    options[goTo]()
    handleClose()
  }

  return (
    <Box>
      {!auth?.token && <LoginButton />}
      {auth?.token && (
        <IconButton
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          color="secondary"
          onClick={handleClick}
        >
          {!open && <MenuIcon />}
          {open && <MenuOpenIcon />}
        </IconButton>
      )}
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => handleClickOptions({ goTo: 'miFiumbi' })}
          sx={{ color: theme.palette.customText.textWhiteLight }}
        >
          Mi Fiumbi
        </MenuItem>
        <MenuItem
          onClick={() => handleClickOptions({ goTo: 'options' })}
          sx={{ color: theme.palette.customText.textWhiteLight }}
        >
          Opciones
        </MenuItem>
        <MenuItem onClick={() => handleClickOptions({ goTo: 'logOut' })}>
          <SpecialLoginButton>Cerrar sesion</SpecialLoginButton>
        </MenuItem>
      </StyledMenu>
    </Box>
  )
}

export default HamburgueMenu
