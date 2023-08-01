import { Container, Nav, Navbar } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Temp Name</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#store">Store</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar
