import { Col, Container, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

const items : string[] = ["item1", "item2", "item3"]

function Store() {




  return (
    <Container style={{display: "flex", justifyContent: "center"}}>
        <Row md={2} s={1} lg={3} style={{display: "flex", justifyContent: "left", marginTop: "30px", width: "100%", maxWidth: "900px"}}>
        {items.map(id => 
        <Col style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
          <StoreItem key={id} name={id}></StoreItem>
        </Col>
        )}
        </Row>
    </Container>
  )
}

export default Store
