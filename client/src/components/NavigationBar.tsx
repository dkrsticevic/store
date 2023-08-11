import { useState } from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import Checkout from './Checkout';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';


function NavigationBar() {
    const {getTotalItems} = useCart()
    const [open, setOpen] = useState<boolean>(false)
    const count = getTotalItems()
    const { getUser, logout } = useUser()
    let user = getUser()
    const navigate =  useNavigate()

    return (
        <>
        <Navbar bg="dark" data-bs-theme="dark" sticky="top">
        <Container>
            <Navbar.Brand>Temp Name</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#store">Store</Nav.Link>
            </Nav>
            <Button style={{position: "relative", width: "40px", aspectRatio: "1/1", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"}}
            onClick={() => setOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                    </svg>
                    {count !== 0 &&
                    <span style={{position: "absolute", top: "-8px", right: "-10px",  borderRadius: '50%', background: "red", fontSize: "12px", width: "20px", height: "20px"}}>{count}</span>        }
            </Button>
            {user == ""  ?
            <Link style={{marginLeft: "10px"}} to="/login"><Button>Log In</Button></Link>
            : <Dropdown><Dropdown.Toggle style={{marginLeft: "10px", position: "relative", borderRadius: "10px", width: "70px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                </svg>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item disabled={true}>{user}</Dropdown.Item>
                    <Dropdown.Item onClick={() => {navigate("/update-profile")}}>Update Profile</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Log out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            }


        </Container>
        </Navbar>
        <Checkout open={open} setOpen={setOpen}></Checkout>
        </>
    )
}

export default NavigationBar
