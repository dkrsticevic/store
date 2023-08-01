import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Checkout from './Checkout';

function NavigationBar() {
    const [open, setOpen] = useState<boolean>(false)


    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand>Temp Name</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#store">Store</Nav.Link>
            </Nav>
            <Button style={{width: "40px", aspectRatio: "1/1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}
            onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
            </Button>
        </Container>
        </Navbar>
        <Checkout open={open} setOpen={setOpen}></Checkout>
        </>
    )
}

export default NavigationBar
