import { Button, Offcanvas } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type CheckoutProps = {
    open : boolean
    setOpen: any
}

function Checkout({open, setOpen}: CheckoutProps) {
    const {getCart} = useCart()
    const items = getCart();

    const handleCheckout = () => {
        fetch('http://localhost:3000/create-checkout-session', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items })
        }).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
        window.location = url
        }).catch(e => {
        console.error(e.error)
        })
    }

    return (
        <Offcanvas show={open} onHide={() => setOpen(false)} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Checkout</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {items.map(item => <div>
                    <span>Item {item.id} </span>
                    <span>x {item.quantity}</span>
                </div>)}
                { items.length > 0 &&
                <Button onClick={handleCheckout} style={{marginTop: "20px"}}> 
                    Proceed to Checkout
                </Button> 
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Checkout