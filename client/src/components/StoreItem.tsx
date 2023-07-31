import { Button, Card } from "react-bootstrap"

type StoreItemProps = {
    name : string
    id: number
}

function StoreItem({name, id}: StoreItemProps) {

  const handleCheckout = () => {
    fetch('http://localhost:3000/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ items: [{id: id, quantity: 1}]})
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
    <Card style={{width: "300px", height: "300px"}}>
        <Card.Title>{name}</Card.Title>
        <Button value={id} onClick={handleCheckout}> Checkout </Button>
    </Card>
  )
}

export default StoreItem