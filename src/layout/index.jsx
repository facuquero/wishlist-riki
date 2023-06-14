import { Grid, useTheme } from '@mui/material'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
const Layout = () => {
  const theme = useTheme()
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          position: 'sticky',
          top: 0,
          zIndex: 999,
        }}
      >
        <Header />
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          background: `linear-gradient(to right bottom, ${theme.palette.customBlack.black99a1}, ${theme.palette.customBlack.black43a1} 30%)`,
        }}
      >
        <Outlet />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Layout
