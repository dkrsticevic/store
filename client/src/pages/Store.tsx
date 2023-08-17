import { Col, Container, Row } from "react-bootstrap";
import items from "../data/items.json"
import StoreItem from "../components/StoreItem";


function Store() {
  return (
    <>
    <Container style={{display: "flex", justifyContent: "center"}}>
        <Row md={2} s={1} lg={3} style={{display: "flex", justifyContent: "left", marginTop: "30px", width: "100%", maxWidth: "1000px"}}>
        {items.map(item => 
        <Col key={item.id} style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
          <StoreItem item={item}></StoreItem>
        </Col>
        )}
        </Row>
    </Container>
    </>
  )
}

export default Store
