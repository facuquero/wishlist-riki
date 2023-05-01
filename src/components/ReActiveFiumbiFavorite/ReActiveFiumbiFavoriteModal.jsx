import React, { useEffect } from 'react'
import { Button, Grid, IconButton } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SlideTransition } from '../SlideTransition'
import { reActiveProduct } from '../../../api/fiumbiProducts'
import Typography from '../commons/Typography'
import CloseIcon from '@mui/icons-material/Close'

const ReActiveFiumbiFavoriteModal = ({
  showModal,
  handleClose,
  id,
  fiumbiTitle,
}) => {
  const { execute, data, isLoading, isError } = reActiveProduct()

  const handleClickReActiveProduct = () => {
    execute({
      data: {
        productId: id,
      },
    })
  }

  useEffect(() => {
    if (data?.status === 200) {
    }
  }, [isLoading, data])

  const modalClose = () => {
    const isFiumbiActiveChange = data?.status === 200
    handleClose({ isFiumbiActiveChange })
  }

  return (
    <Dialog
      open={showModal}
      TransitionComponent={SlideTransition}
      keepMounted
      onClose={modalClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>
        <Grid container flexWrap="nowrap" alignItems="center">
          <Typography sx={{ overflowWrap: 'break-word' }} variant="h6">
            Seguro que desea agregar este item de sus favoritos?
          </Typography>
          <Grid item xs="auto" sx={{ ml: 'auto', mr: 1 }}>
            <IconButton
              aria-label="close"
              onClick={modalClose}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ display: 'flex', justifyContent: 'center', my: 2 }}
          >
            <Typography>{fiumbiTitle}</Typography>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
            {!data && (
              <Button onClick={handleClickReActiveProduct}>
                {!isLoading && 'Agregar'}
                {isLoading && <CircularProgress />}
              </Button>
            )}
            {data && (
              <Button onClick={modalClose}>
                <Typography>Listo</Typography>
              </Button>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  )
}

export default ReActiveFiumbiFavoriteModal
