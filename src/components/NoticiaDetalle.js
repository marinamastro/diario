import React, { Component } from 'react';
import {Consumer} from "../context";
import {Container,Row,Image,Col} from "react-bootstrap";
import Comentarios from "./Comentarios";
import Formulario from "./Formulario"

export default class NoticiaDetalle extends Component {
    render() {        
        return (
            <Consumer>
                {
                    (data)=>{
                        const {titulo,seccion,descripcion,img,cuerpo,por,cuerpo2} = data.noticiaDetalle;
                        return(
                            <Container  className="noticiaD">
                            <Row><h1>{titulo}</h1></Row>
                            <Row><p><span className="seccion">{seccion}</span></p></Row>
                            <Row><p>{descripcion}</p></Row>
                            <Row><Image src={img} alt="" fluid/></Row>
                            <Row><p style={{marginTop:"1rem"}}>{cuerpo}</p></Row>
                            <Row><p>{cuerpo2}</p></Row>
                            <Row><p className="por">{por}</p></Row>
                            <hr/> 
                            <Row><Col><p><h5>Comentarios</h5></p></Col></Row>
                            <hr/>
                            <Comentarios/>  
                            <Formulario/>                                       
                        </Container>
                        )
                    }
                }
            
        </Consumer>
        )
    }
}
