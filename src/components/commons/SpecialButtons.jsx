import { Button as MUIButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoginButton = styled(MUIButton)(({ theme }) => ({
  borderRadius: 40,
  color: theme.palette.customText.textWhiteLight,
  background: `linear-gradient(${theme.palette.customGold.light}, ${theme.palette.customGold.dark});`,
  '&:hover': {
    background: `linear-gradient(${theme.palette.customGold.lightHover}, ${theme.palette.customGold.darkHover});`,
  },
}))

const CommonButton = styled(MUIButton)(({ theme }) => ({
  color: theme.palette.customText.textWhiteLight,
  background: theme.palette.customGold.dark,
  '&:hover': {
    background: theme.palette.customGold.darkHover,
  },
  '&:disabled': {
    color: theme.palette.customText.textWhiteLightAt30,
    backgroundColor: theme.palette.customText.textWhite111,
  },
}))

export const SpecialLoginButton = (props) => (
  <LoginButton sx={{ px: 4 }} {...props} />
)

export const SpecialCommonButton = (props) => <CommonButton {...props} />
