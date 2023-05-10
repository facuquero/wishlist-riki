import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
  },
}))

export default StyledDialog
