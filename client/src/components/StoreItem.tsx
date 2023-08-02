import { Button, Card } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type StoreItemProps = {
    name : string
    id: number
    price: number
}

function StoreItem({name, id}: StoreItemProps) {
  const { addToCart, getQuantity } = useCart()
  const count = getQuantity(id)


  return (
    <Card style={{width: "300px", height: "300px"}}>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        {count !== 0 &&
        <div>{count} in Cart</div>}
        <Button value={id} onClick={() => addToCart(id)}>Add To Cart</Button>
        </Card.Body>
    </Card>
  )
}

export default StoreItem