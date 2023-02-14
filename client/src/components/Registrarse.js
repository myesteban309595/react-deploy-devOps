
import React, { Fragment, useMemo, useState } from 'react'

import {
    Grid,
    Typography,
    Box,
    Button,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
    TextField, 

} from '@mui/material'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormHelperText from '@mui/material/FormHelperText';
import Swal from 'sweetalert2';

//^ ICONS
import AccountCircle from '@mui/icons-material/AccountCircle';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import PublicIcon from '@mui/icons-material/Public';

//^ STYLES
import {makeStyles} from "@material-ui/core"
import axios from 'axios';

const useStyle = makeStyles({
  haveAccount: {
    '&:hover': {
      color:"#534bae",
      fontWeight: 'bold', // negrita
      textDecorationLine: "underline",
      textDecorationColor:"grey",
    }
  },
})

const Login = ()=> {

  const [body, setBody] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    role: "client"
  });

  const [values, setValues] = useState({
    showPassword: false,
  });
    
  const [valuesRepeat, setValuesRepeat] = useState({
    passwordRepeat: '',
    showPasswordRepeat: false,
  });

    const classes = useStyle();

    const inputChange = ({target})=> {
      const {name, value} = target
      setBody({
        ...body,
        [name]: value
      })
    }
    
    const handleChangeRepeat =({target}) => {
      const {name, value} = target;
      setValuesRepeat({ 
        ...valuesRepeat, 
         [name]: value 
      });
      };

 const RegistrarDatos = ()=> {
      // console.log("body registrar datos",body);
   if(body.password !== "" && body.password.length > 3){
    if(body.password === valuesRepeat.passwordRepeat ){ 
      axios.post('http://localhost:5050/api/registro',body)
      .then(({data})=> {
        Swal.fire({
         icon: "success",
         title: "Registrado Correctamente",
         text: "Por favor inicia sesión.",
         confirmButtonText: "Aceptar",
         confirmButtonColor: "#3085d6",
         background:"white"
         // showCancelButton: true,
         // cancelButtonColor: "#d33",
         // cancelButtonText: "Cancelar",
       }).then((result)=> {
         if(result.isConfirmed){
           window.location = '/';
         }
       })
      })
      .catch(({response}) => {
          console.log("response:",response);
          Swal.fire('response:', response)
       })
     }else{
       Swal.fire({
         icon: "error",
         title:'Las contraseñas no cohinciden',
         confirmButtonText: "Aceptar",
         confirmButtonColor: "#3085d6",
       })}
  }else{
    Swal.fire({
      icon: "error",
      title:'Ingrese una contraseña válida',
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#3085d6",
    })}
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickShowPasswordRepeat = () => {
    setValuesRepeat({
      ...valuesRepeat,
      showPasswordRepeat: !valuesRepeat.showPasswordRepeat,
    });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleMouseDownPasswordRepeat = (e) => {
    e.preventDefault();
  };

  const MyFormHelperText = ()=> {
    const helperText = useMemo(()=> {
      if(body.password === valuesRepeat.passwordRepeat && body.password !== ""){
        return 'Coinciden'
      }else if(body.password !== ""){
        return 'No coinciden'
      } else {
        return "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
      }
    },[])

    return <FormHelperText>{helperText}</FormHelperText>
  }

  // const MyFormHelperText = () => {
  
  //   const helperText = React.useMemo(() => {
  //     if (onclick) {
  //       return 'This field is being focused';
  //     }
  
  //     return 'Helper text';
  //   }, []);
  
  //   return <FormHelperText>{helperText}</FormHelperText>;
  // }

    return(
     <Fragment>
      <Grid container xs={12} style={{ 
            backgroundImage:`url("https://img.freepik.com/foto-gratis/fondo-acuarela-pintada-mano-forma-cielo-nubes_24972-1095.jpg?w=2000")`,
            width:"100%",
            height: "100%",
            marginTop:15, 
            display:"flex",
            alignItems:"center",
            justifyContent:"center"
            }}>

        <Box style={{
          background:"#ffb74d", 
          marginTop:100, 
          borderRadius:15, 
          width: 400, 
          marginBottom: 77,
          }}>
       {/*//& Titulo INGRESA TUS DATOS */}
      <Grid>
       <Typography
         style={{
         fontSize:35,
         color: "#424242",
         fontFamily:"fantasy",
         marginBottom:25,
         marginLeft:45,
         padding:15
         }}
         > 
         INGRESA TUS DATOS
       </Typography>
     </Grid>
     {/*//& ingresar Nombre usuario */}
    <FormControl sx={{ m: 1, width: 330}} variant="outlined">
     <TextField
      required
      value={body.name}
      name="name"
      label=" Nombre"
      style={{
         backgroundColor: "#ffe0b2",
         marginLeft:50,
         marginBottom:10,
       }}
      onChange={inputChange}
      InputProps={{
      endAdornment: (
       <InputAdornment position="end">
         <AccountCircle />
       </InputAdornment>
      )}}
      variant="outlined"
     />
     </FormControl>
     {/*//& ingresar APELLIDO usuario */}
    <FormControl sx={{ m: 1, width: 330}} variant="outlined">
     <TextField
      required
      value={body.lastName}
      name="lastName"
      label=" Apellido"
      style={{
         backgroundColor: "#ffe0b2",
         marginLeft:50,
         marginBottom:10,
       }}
       onChange={inputChange}
      InputProps={{
      endAdornment: (
       <InputAdornment position="end">
         <AccountCircle />
       </InputAdornment>
      )}}
      variant="outlined"
     />
     </FormControl>
     {/*//& correo usuario */}
    <FormControl sx={{ m: 1, width: 330}} variant="outlined">
     <TextField
      required
      value={body.email}
      name="email"
      label=" Correo electrónico"
      style={{
         backgroundColor: "#ffe0b2",
         marginLeft:50,
         marginBottom:10,
       }}
       onChange={inputChange}
      InputProps={{
      endAdornment: (
       <InputAdornment position="end">
         <MarkunreadIcon />
       </InputAdornment>
      )}}
      variant="outlined"
     />
     </FormControl>
     {/*//& numero telefono */}
    <FormControl sx={{ m: 1, width: 330}} variant="outlined">
     <TextField
      required
      value={body.phone}
      name="phone"
      label=" Telefono"
      style={{
         backgroundColor: "#ffe0b2",
         marginLeft:50,
         marginBottom:10,
       }}
       onChange={inputChange}
      InputProps={{
      endAdornment: (
       <InputAdornment position="end">
         <SettingsPhoneIcon />
       </InputAdornment>
      )}}
      variant="outlined"
     />
     </FormControl>

     {/*//& pais */}
    <FormControl sx={{ m: 1, width: 330}} variant="outlined">
     <TextField
      required
      value={body.country}
      name="country"
      label=" Pais"
      style={{
         backgroundColor: "#ffe0b2",
         marginLeft:50,
         marginBottom:10,
       }}
       onChange={inputChange}
      InputProps={{
      endAdornment: (
       <InputAdornment position="end">
         <PublicIcon />
       </InputAdornment>
      )}}
      variant="outlined"
     />
     </FormControl>
     {/*//& ingresar contraseña */}
     <FormControl sx={{ m: 1, width: 330 }} variant="outlined">
       <InputLabel htmlFor="outlined-adornment-password" style={{marginLeft:50}}>Contraseña</InputLabel>
        <OutlinedInput
          required
          value={body.password}
          name="password"
          style={{
            background: "#ffe0b2", 
            marginLeft:50,
            marginBottom:10
           }}
          onChange={inputChange}
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={
           <InputAdornment position="end">
            <IconButton
             aria-label="toggle password visibility"
             onClick={handleClickShowPassword}
             onMouseDown={handleMouseDownPassword}
             edge="end"
             >
             {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
         }
         label="Contraseña" 
         />
     </FormControl>     
     {/*//& Repetir contraseña */}
     <FormControl sx={{ m: 1, width: 330 }} variant="outlined">
       <InputLabel htmlFor="outlined-password" style={{marginLeft:50}}>Repite la contraseña</InputLabel>
        <OutlinedInput
          required
          value={valuesRepeat.passwordRepeat}
          name="passwordRepeat"
          style={{
            background: "#ffe0b2", 
            marginLeft:50,
            marginBottom:10
           }}
          type={valuesRepeat.showPasswordRepeat ? 'text' : 'password'}
          onChange={handleChangeRepeat}
          endAdornment={
           <InputAdornment position="end">
            <IconButton
             aria-label="toggle password visibility"
             onClick={handleClickShowPasswordRepeat}
             onMouseDown={handleMouseDownPasswordRepeat}
             edge="end"
             >
             {valuesRepeat.showPasswordRepeat ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
         }
         label="Repite la contraseña"
         />
     </FormControl>     
     <MyFormHelperText />
{/* 
     <FormControl sx={{ width: '25ch' }}>
       <OutlinedInput placeholder="Please enter text" />
       <MyFormHelperText />
     </FormControl>   */}

     {/*//& botón registrar */}
     <Grid >
      <Button 
        style={{
        backgroundColor:"ButtonFace",
        width: 280,
        marginTop: 15,
        marginBottom:15,
        borderRadius:11,
        color: "black",
        fontFamily:"serif",
        marginLeft:60
        }}
        onClick = {RegistrarDatos}
      > Registrarse</Button>
     </Grid>

     <Grid >
        <Button
             className={classes.haveAccount}
             href="/" 
             style={{
              width: 280,
              marginTop: 10,
              marginBottom:25,
              borderRadius:11,
              color: "black",
              fontFamily:"serif",
              marginLeft:60,
              }}
              > 
              Ya tengo una cuenta
        </Button>
     </Grid>
    </Box>
  </Grid>
</Fragment>
    )
}

export default Login