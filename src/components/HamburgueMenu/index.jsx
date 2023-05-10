import { Box } from '@mui/material'
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

const HamburgueMenu = () => {
  const { auth, logOut } = useAuth()
  const navigate = useNavigate()
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
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleClickOptions({ goTo: 'miFiumbi' })}>
          Mi Fiumbi
        </MenuItem>
        <MenuItem onClick={() => handleClickOptions({ goTo: 'options' })}>
          Opciones
        </MenuItem>
        <MenuItem onClick={() => handleClickOptions({ goTo: 'logOut' })}>
          <SpecialLoginButton>Cerrar sesion</SpecialLoginButton>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default HamburgueMenu
