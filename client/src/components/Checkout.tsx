import { Button, Offcanvas } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type CheckoutProps = {
    open : boolean
    setOpen: any
}

function Checkout({open, setOpen}: CheckoutProps) {
    const { getCart, removeFromCart } = useCart()
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
                {items.map(item => <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px"}}>
                    <span>Item {item.id} x {item.quantity}</span>
                    <span>$ {item.price*item.quantity} AUD</span>
                    <Button style={{borderRadius: "50%", width: "40px", aspectRatio: "1/1"}} onClick={() => removeFromCart(item.id)}>X</Button>
                </div>)}
                { items.length > 0 &&
        	    <>
                <div style={{fontWeight: "bold"}}> 
                Total Price ${items.reduce((acc, current) => acc + (current.price * current.quantity), 0)} AUD
                </div> 

                <Button onClick={handleCheckout} style={{marginTop: "20px"}}> 
                    Proceed to Checkout
                </Button> 
                </>
                }
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default Checkout