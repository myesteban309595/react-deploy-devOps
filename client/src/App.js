import React, { Fragment } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// import Navbar from './components/Navbar';
import Header from './utils/Header';
// import Home from './views/ClientHome'
import Registrarse from  './components/Registrarse'
import Inicio from './views/Inicio'
import PermanentDrawerLeft from './views/DashboardDrawer';
import AccountMenu from './components/profile/AccountMenu';

import AdminHome from './views/admin/AdminHome';

//borrar este comentario
// const linkArrayNavBar = ['PRODUCTOS','SERVICIOS','INICIO','CONTACTANOS'];

function App() {
  
  let direccion = window.location
  let ruta = (direccion.pathname).toString().replace(/\/+/g, '').replace(/\s+/g, '');

  if(ruta === ''){
    localStorage.removeItem('myItem', 0);
    localStorage.removeItem('accessToken', 0);
  }

  return (
    <Fragment>
{/* 
      <Navbar 
          links={linkArrayNavBar}  //* le paso el parametro array linkArrayNavBar a NavBar
          />    */}

      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element = {<Home/>}/> */}
          <Route path='/inicio' element = {<Inicio/>}/>
          <Route path='/header' element = {<Header/>} />
          <Route path='/registro' element = {<Registrarse/>} />
          <Route path='/adminHome' element = {<AdminHome/>} />
          <Route path='/' element = {<PermanentDrawerLeft/>} />
          <Route path='/accountMenu' element = {<AccountMenu/>} />
        </Routes>
      </BrowserRouter>

    </Fragment>
  );
}

export default App;
