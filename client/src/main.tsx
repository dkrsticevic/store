import React from 'react'
import ReactDOM from 'react-dom/client'
import Store from './pages/Store.tsx'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav } from 'react-bootstrap';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Temp Name</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    <Store />
  </React.StrictMode>,
)
