import { Grid } from '@mui/material'
import Header from '../components/header'
import { Outlet } from 'react-router-dom'
const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={12}>
        {children}
      </Grid>
      <Grid item>footer</Grid>
    </Grid>
  )
}

export default Layout
