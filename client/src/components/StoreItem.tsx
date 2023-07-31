import { Button, Card } from "react-bootstrap"

type StoreItemProps = {
    name : string
}

function StoreItem({name}: StoreItemProps) {

  const handleCheckout = () => {
    console.log("clicked")
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
      console.log(url)
      //window.location = url
    }).catch(e => {
      console.error(e.error)
    })
  }

  return (
    <Card style={{width: "300px", height: "300px"}}>
        <Card.Title>{name}</Card.Title>
        <Button value={name} onClick={handleCheckout}></Button>
    </Card>
  )
}

export default StoreItem