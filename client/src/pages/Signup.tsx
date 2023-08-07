import { useRef } from 'react';
import { Form, Button, Card } from 'react-bootstrap'

export default function Signup() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const passwordConfirmRef = useRef<HTMLInputElement>(null);


    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <Card style={{width: "500px"}}>
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
                        <Button type='submit' style={{marginTop: "20px"}}>Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
