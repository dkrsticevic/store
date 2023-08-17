import { Button, Card } from "react-bootstrap"
import { useCart } from "../context/CartContext"

type StoreItemProps = {
    item : {id: number, name: string, price: number, image: string}
}

function StoreItem({item}: StoreItemProps) {
  const { addToCart, getQuantity, removeFromCart } = useCart()
  const count = getQuantity(item.id)


  return (
    <Card key={item.id} style={{width: "350px"}}>
        <Card.Body style={{height: "100%", width: "100%"}}>
        <Card.Title style={{display: "flex", justifyContent: "space-between"}}><h3>{item.name}</h3><h4>${item.price} AUD</h4></Card.Title>
        <div style={{position: "absolute", top: "45px", right: "16px"}}>{count !== 0 && `${count} in Cart`}</div>
        <Card.Img src={item.image} style={{height: "200px", width: "100%", objectFit: "contain", border: "1px solid black", marginTop: "5px", marginBottom: "5px"}}></Card.Img>
        <Button className="w-100" style={{marginBottom: "5px"}} onClick={() => addToCart(item.id, item.price)}>Add To Cart</Button>
        <Button className="w-100" disabled={count == 0 && true} onClick={() => removeFromCart(item.id)}>Remove from Cart</Button> 
        </Card.Body>
    </Card>
  )
}

export default StoreItem