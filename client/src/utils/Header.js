import React, {Fragment} from 'react'

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tab,
  Tabs,
  Box,
  Button
} from '@mui/material'

const Header = ()=> {

    return (
        <Fragment>
          <Fragment>
            <Grid container style={{background:"orange"}}>
             <h1 style={{color:"red"}}>HOLA MUNDO DESDE HEADER</h1>
            </Grid>
        </Fragment>
        </Fragment>
    )
}

export default Header