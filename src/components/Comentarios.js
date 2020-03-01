import React from 'react';
import {Consumer} from "../context";
import {Row,Col} from "react-bootstrap"


export default function Comentarios() {
    return (
        <Consumer>
            {(data)=>{
                return(
                    data.comentariosFiltrados.map(x=>{
                        return(
                            <Row>
                                <Col md={10} lg={10} xl={10} className="comentario">
                                    <p className="email"><i class="fas fa-user"></i> {x.email}</p>
                                    <p className="body">{x.body}</p>
                                    <hr/>
                                </Col>                                                             
                            </Row>
                        )})                    
                )
            }}
        </Consumer>
       
    )
}
