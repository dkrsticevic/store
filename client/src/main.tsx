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
import UpdateProfile from './components/UpdateProfile.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <UserProvider>
    <CartProvider>
      <Routes>
        <Route path='/' Component={Store}></Route>
        <Route path='/Signup' Component={Signup}></Route>
        <Route path='/Login' Component={Login}></Route>
        <Route path='/forgot-password' Component={ForgotPassword}></Route>
        <Route element={<PrivateRoute></PrivateRoute>}>
          <Route path='/update-profile' Component={UpdateProfile}></Route>
        </Route>
      </Routes>
    </CartProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
