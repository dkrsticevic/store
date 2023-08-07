import { useRef } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Signup() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);


    return (
        <Container style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
            <Card style={{width: "100%", maxWidth: "500px", marginTop: "200px"}}>
                <Card.Body>
                    <Card.Title> Sign Up</Card.Title>
                    <Form> 
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' ref={passwordRef} required/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirm</Form.Label>
                            <Form.Control type='password' ref={passwordConfirmRef} required/>
                        </Form.Group>
                        <Button className='w-100' type='submit' style={{marginTop: "20px"}}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div>Already have account? <Link to="/login">Log In</Link></div>
        </Container>
    )
}
