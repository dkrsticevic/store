import { Offcanvas } from "react-bootstrap"

type CheckoutProps = {
    open : boolean
    setOpen: any
}

function Checkout({open, setOpen}: CheckoutProps) {

  const handleCheckout = () => {
    fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: [{id: 1, quantity: 1}]})
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

        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default Checkout