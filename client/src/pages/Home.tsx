import { Button, Carousel, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import items from "../data/items.json"

function Home() {
    return (
        <>
        <div style={{background: "lightgray", height: "600px", width: "100%"}}>
        <Container style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{paddingTop: "200px", display: "flex", flexDirection: "column", width: "50%"}}>
            <h4>Temp Name</h4>
            <h1 style={{width: "50%", marginBottom: "20px"}}>Summer sale 2023</h1>
            <Link to="/store">
            <Button style={{width: "100px"}}>Shop Now</Button>
            </Link>
            </div>
            <img src="./images/cat.png" style={{height: "500px", paddingTop: "50px"}}></img>
        </Container>
        </div>
        <Container>
        <h2 style={{textAlign: "center", paddingTop: "30px"}}>Featured Products</h2>
        <Carousel variant="dark" style={{maxWidth: "800px", margin: "0 auto"}}>
            {items.map(item => 
                <Carousel.Item>
                    <img className="w-100" src={item.image} style={{height: "200px", objectFit: "contain", marginBottom: "80px"}} alt=""/>
                    <Carousel.Caption>
                    <h5>{item.name}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            )}
        </Carousel>
        
        <div style={{paddingTop: "30px", maxWidth: "400px"}}> 
                <h2>Contact Us</h2>
                <p>We value your feedback and inquiries. Reach out at our business email test@test.com to connect with our members. </p>
        </div>
        </Container>
        </>
    )
}

export default Home
