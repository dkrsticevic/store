import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './pages/Store.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup.tsx';
import Login from './pages/Login.tsx';
import { UserProvider } from './context/UserContext.tsx';
import ForgotPassword from './components/ForgotPassword.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserProvider>
    <CartProvider>
      <Routes><Route path='/' Component={Store}></Route></Routes>
      <Routes><Route path='/Signup' Component={Signup}></Route></Routes>
      <Routes><Route path='/Login' Component={Login}></Route></Routes>
      <Routes><Route path='/forgot-password' Component={ForgotPassword}></Route></Routes>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
