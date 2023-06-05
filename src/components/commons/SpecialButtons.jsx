import { Button as MUIButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoginButton = styled(MUIButton)(({ theme }) => ({
  borderRadius: 40,
  color: theme.palette.customText.textWhiteblack,
  background: `linear-gradient(to right bottom, #f9f3d9,#ffce1f 50%)`,
  '&:hover': {
    background: theme.palette.customGold.lightHover,
  },
}))

const CommonButton = styled(MUIButton)(({ theme }) => ({
  color: theme.palette.customText.textWhiteLight,
  background: `linear-gradient(${theme.palette.customGold.light}, ${theme.palette.customGold.dark});`,
  '&:hover': {
    background: `linear-gradient(${theme.palette.customGold.lightHover}, ${theme.palette.customGold.darkHover});`,
  },
  '&:disabled': {
    color: theme.palette.customText.textWhiteLightAt30,
    background: theme.palette.customText.textWhite111,
  },
}))

export const SpecialLoginButton = (props) => (
  <CommonButton sx={{ px: 4, borderRadius: 8 }} {...props} />
)

export const SpecialCommonButton = (props) => <CommonButton {...props} />
