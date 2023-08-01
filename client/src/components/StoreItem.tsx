import { Button, Card } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type StoreItemProps = {
    name : string
    id: number
}

function StoreItem({name, id}: StoreItemProps) {
  const { addToCart } = useCart()

  return (
    <Card style={{width: "300px", height: "300px"}}>
        <Card.Title>{name}</Card.Title>
        <Button value={id} onClick={() => addToCart(id)}> Add To Cart </Button>
    </Card>
  )
}

export default StoreItem