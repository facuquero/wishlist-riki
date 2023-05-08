import { Grid, useTheme } from '@mui/material'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  const theme = useTheme()
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          //background: `linear-gradient(to right bottom, ${theme.palette.customGold.light}, ${theme.palette.customGold.dark} 40%)`,
          background: '#fff7b7',
        }}
      >
        <Outlet />
      </Grid>
      <Grid item>footer</Grid>
    </Grid>
  )
}

export default Layout
