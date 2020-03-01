import React from 'react';
import {Form,Button} from "react-bootstrap"

export default function Formulario() {
    return (                    
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Escribe tu comentario</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button className="botonForm">ENVIAR</Button>
            </Form>        
    )
}
