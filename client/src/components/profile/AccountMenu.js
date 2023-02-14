import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
// import Logout from '@mui/icons-material/Logout';
import Swal from 'sweetalert2';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';

export default function AccountMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [logoutState, setlogoutState] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    console.log("event.currentTarget",event.currentTarget);
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  function Logout() {
    if(logoutState === true){
      Swal.fire({
          title: 'Cerrar sesion',
          text: "Quieres cerrar la sesion ?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Cerrar'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Cerrada!',
              'Su sesion se ha cerrado correctamente.'
              )
              setlogoutState(false);
          }
        })
    }
  
  }
  
  return (
    <React.Fragment>

      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography> */}
        <Tooltip title="Alarmas acivadas" arrow placement='left'>
        <IconButton style={{marginRight:25}}>
          <Badge badgeContent={10} color="secondary" >
            <MailIcon color="action" />
          </Badge>
        </IconButton>
        </Tooltip>
        <Typography sx={{ minWidth: 100 }}>Marlon Yoel</Typography>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 42, height: 42, backgroundColor: "red" }}>MA</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ backgroundColor: "blue" }} /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ backgroundColor: "orange" }} /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={()=> setlogoutState(true)}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}