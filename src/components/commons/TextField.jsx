import { styled } from '@mui/material/styles'
import { TextField as MUITextfield } from '@mui/material'

const CssTextField = styled(MUITextfield)({
  '&.MuiTextField-root': {
    '& fieldset': {
      borderColor: 'rgba(255,255,255, 0.5)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(255,255,255, 0.8)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(255,255,255, 0.8)',
    },
    '& label.Mui-focused': {
      color: 'rgba(255,255,255, 0.8)',
    },
    '& label ': {
      color: 'rgba(255,255,255, 0.5)',
    },

    '& .MuiInput-underline:after': {
      borderBottomColor: 'rgba(255,255,255, 0.5)',
    },
    input: {
      '&::placeholder': {
        color: 'rgba(255,255,255, 1)',
      },
      color: 'rgba(255,255,255, 1)',
    },
    '& input:-internal-autofill-selected': {
      backgroundColor: 'transparent !important',
    },
  },
  '& input:-webkit-autofill::before, & input:-webkit-autofill::after': {
    content: 'none',
    backgroundColor: 'transparent',
  },
  '& input:focus:-webkit-autofill::before, & input:focus:-webkit-autofill::after':
    {
      content: 'none',
      backgroundColor: 'transparent',
    },
})

export const TextField = (props) => (
  <CssTextField
    sx={{
      fieldset: {
        borderWidth: 2,
      },
    }}
    {...props}
  />
)

export default TextField
