import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './pages/Store.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext.tsx';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from './pages/Signup.tsx';
import Login from './pages/Login.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <CartProvider>
      <Routes><Route path='/' Component={Store}></Route></Routes>
      <Routes><Route path='/Signup' Component={Signup}></Route></Routes>
      <Routes><Route path='/Login' Component={Login}></Route></Routes>
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
