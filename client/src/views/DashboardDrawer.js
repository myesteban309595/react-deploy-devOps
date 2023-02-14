import {useState} from 'react'

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InventoryIcon from '@mui/icons-material/Inventory';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';

import { 
    Grid,
 } from '@mui/material';

// import axios from 'axios';
// import Swal from 'sweetalert2';

// import localStorage from 'localStorage'
// import jwt_decode from "jwt-decode";

//* componentes
import AccountMenu from '../components/profile/AccountMenu';
// import ClientHome from './ClientHome';
// import Inicio from './Inicio';
import Administrador from './modules/Administrador'
import Alerta from './modules/Alerta'
import Inventario from './modules/Inventario'
import ConfigurarAlerta from './modules/ConfigurarAlertas'

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

    const [pestaña, setPestaña] = useState({
        nombre : "" 
    })

    const configPestaña = (target)=> {
        // const {name, value} = target
        const vista = target.view;
        console.log(vista);

        setPestaña({
          ...pestaña,
           nombre: vista
        //    [name]: value
        })
    } 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
         <Grid sx={{ 
              display: 'flex',
              justifyContent:"space-between",
              alignItems: 'center',
              width: "100%"
             }} >
          <Grid>
           <Typography variant="h6" noWrap component="div">
             Bienvenido
           </Typography>
          </Grid>
          <Grid>
            <AccountMenu/>
          </Grid>   
         </Grid>   
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider/>
        <List style={{backgroundColor:"#3c6382", color:"#FAFAFA", fontSize: "8px"}}>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> configPestaña({view : "Administrador"})} >
                <ListItemIcon>
                  <AdminPanelSettingsIcon />
                </ListItemIcon>
                <ListItemText primary={"Administrador"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> configPestaña({view : "Inventario"})} >
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary={"Inventario"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> configPestaña({view : "Alertas"})} >
                <ListItemIcon>
                  <NotificationsActiveIcon />
                </ListItemIcon>
                <ListItemText primary={"Alertas"} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={()=> configPestaña({view : "ConfigurarAlertas"})} >
                <ListItemIcon>
                  <NotificationAddIcon />
                </ListItemIcon>
                <ListItemText primary={"Configurar Alertas"} />
              </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List style={{backgroundColor:"#487eb0"}}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider/>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
         {
           pestaña.nombre === "Administrador" ? <Administrador/> 
            : 
           pestaña.nombre === "Inventario" ? <Inventario/> 
            : 
           pestaña.nombre === "Alertas" ? <Alerta/> 
            :
          pestaña.nombre === "ConfigurarAlertas" ? <ConfigurarAlerta/> 
            :
            <h1>nada</h1>
         }
        {/* <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}