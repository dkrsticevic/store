import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './pages/Store.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavigationBar></NavigationBar>
    <Store />
  </React.StrictMode>,
)
