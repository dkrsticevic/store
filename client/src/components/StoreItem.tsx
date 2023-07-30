import { Card } from "react-bootstrap"

type StoreItemProps = {
    name : string
}

function StoreItem({name}: StoreItemProps) {

  return (
    <Card style={{width: "300px", height: "300px"}}>
        <Card.Title>{name}</Card.Title>
    </Card>
  )
}

export default StoreItem