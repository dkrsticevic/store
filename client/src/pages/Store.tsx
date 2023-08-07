import { Col, Container, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import NavigationBar from "../components/NavigationBar";

const items : {id: number, name: string, price: number}[] = [{id: 1, name: "item1", price: 100}, {id: 2, name: "item2", price: 120}, {id: 3, name: "item3", price: 130}]

function Store() {
  return (
    <>
    <NavigationBar></NavigationBar>
    <Container style={{display: "flex", justifyContent: "center"}}>
        <Row md={2} s={1} lg={3} style={{display: "flex", justifyContent: "left", marginTop: "30px", width: "100%", maxWidth: "900px"}}>
        {items.map(item => 
        <Col key={item.id} style={{display: "flex", justifyContent: "center", marginBottom: "30px"}}>
          <StoreItem key={item.id} name={item.name} id={item.id} price={item.price}></StoreItem>
        </Col>
        )}
        </Row>
    </Container>
    </>
  )
}

export default Store
