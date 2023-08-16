import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

function Home() {
    return (
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
    )
}

export default Home
