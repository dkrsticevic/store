import { Col, Container, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const items : {id: number, name: string}[] = [{id: 1, name: "item1"}, {id: 2, name: "item2"}, {id: 3, name: "item3"}]

function Store() {
  return (
    <Container style={{display: "flex", justifyContent: "center"}}>
        <Row md={2} s={1} lg={3} style={{display: "flex", justifyContent: "left", marginTop: "30px", width: "100%", maxWidth: "900px"}}>
        {items.map(item => 
        <Col style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
          <StoreItem key={item.id} name={item.name} id={item.id}></StoreItem>
        </Col>
        )}
        </Row>
    </Container>
  )
}

export default Store
