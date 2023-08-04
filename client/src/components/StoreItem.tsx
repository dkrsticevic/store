import { Button, Card } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type StoreItemProps = {
    name : string
    id: number
    price: number
}

function StoreItem({name, id, price}: StoreItemProps) {
  const { addToCart, getQuantity, removeFromCart } = useCart()
  const count = getQuantity(id)


  return (
    <Card key={id} style={{width: "300px", height: "300px"}}>
        <Card.Body style={{height: "100%", width: "100%"}}>
        <Card.Title>{name}</Card.Title>
        <span>${price} AUD</span>
        <div>{count !== 0 && `${count} in Cart`}</div>
        <Button style={{width: "88%", position: "absolute", bottom: 62,}} onClick={() => addToCart(id)}>Add To Cart</Button>
        <Button disabled={count == 0 && true} style={{width: "88%" , position: "absolute", bottom: 12}} onClick={() => removeFromCart(id)}>Remove from Cart</Button> 
        </Card.Body>
    </Card>
  )
}

export default StoreItem