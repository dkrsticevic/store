import { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext'

export default function Login() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const { login } = useUser()
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate =  useNavigate()


    async function handleSubmit(e: any) {
        e.preventDefault();

        try {
           setError('')
           setLoading(true)
           await login(emailRef.current!.value, passwordRef.current!.value)
           navigate("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)

    }

    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Card style={{width: "100%", maxWidth: "500px", marginTop: "200px"}}>
                <Card.Body>
                    <Card.Title style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Link to="/">
                        <Button variant='light' style={{borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", aspectRatio: "1/1"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-caret-left" viewBox="0 0 16 16">
                            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                            </svg>
                        </Button> 
                        </Link>
                        <h3>Log In</h3>
                        <div style={{width: "40px"}}></div>
                     </Card.Title>
                     {error != "" && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}> 
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className='w-100' type='submit' style={{marginTop: "20px"}}>Log In</Button>
                    </Form>
                    <div className='w-100 text-center'><Link to="/forgot-password">Forgot Password?</Link></div>
                </Card.Body>
            </Card>
            <div>Don't have an account? <Link to="/signup">Sign Up</Link></div>
        </Container>
    )
}