import React from 'react';
import {Consumer} from "../context";
import CategoriasFiltradas from "./CategoriasFiltradas";
import MasLeidas from "./MasLeidas";
import {Col,Container,Row} from "react-bootstrap"


export default function Categoria() {
    return (
        <Consumer>
            {
                (data)=>{                   
                    return(
                        <Container>
                            <Row className="noticiaP">
                            <h4 className="tituloSeccion">{data.seccion}</h4>
                            </Row> 
                        <Row>
                        <Col md={10} lg={10}>
                         {data.categoria.map(x=><CategoriasFiltradas key={x.titulo} datos={x} todos={data}/>)}
                        </Col>
                        <Col md={2} lg={2}>
                        <MasLeidas/>
                        </Col>
                        </Row>
                        </Container>
                    )
                }
            }
        </Consumer>








    )
}
