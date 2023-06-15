import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import ContactModal from './ContactModal.jsx'
import { NavLink } from 'react-router-dom'
import Typography from '../../commons/Typography.jsx'

const ContactButton = ({}) => {
  const [showModalContact, setShowModalContact] = useState(false)

  const handleClickOpen = () => {
    setShowModalContact(true)
  }

  const handleClose = () => {
    setShowModalContact(false)
  }

  return (
    <Box>
      <NavLink onClick={handleClickOpen} style={{ textDecoration: 'none' }}>
        <Typography color="white">Contacto</Typography>
      </NavLink>
      {showModalContact && (
        <ContactModal
          showModalContact={showModalContact}
          handleClose={handleClose}
        />
      )}
    </Box>
  )
}

export default ContactButton
