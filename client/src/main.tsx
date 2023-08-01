import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './pages/Store.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.tsx';
import { CartProvider } from './context/CartContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartProvider>
      <NavigationBar></NavigationBar>
      <Store />
    </CartProvider>
  </React.StrictMode>,
)
