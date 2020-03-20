import React, {Component } from 'react';
import {Col,Row,Image} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class NoticiaPrincipal extends Component {
    render() {
        const {seccion,titulo,descripcion,img,por,id}=this.props.datos;        
        return (
            <Link to={`/detalle/${id}`} style={{color:"black"}} onClick={()=>{this.props.todos.handleDetailPrincipal()}}>
                <Row className="noticiaP">    
                    <Col md={4} lg={4} xl={4} id="noticia">
                        <p><span className="seccion">{seccion}</span></p>
                        <h1>{titulo}</h1>
                        <p>{descripcion}</p>
                        <p className="por">{por}</p>
                    </Col>        
                    <Col md={8} lg={8} xl={8}>
                         <Image src={img} alt="" fluid />           
                    </Col>                     
                    </Row>
            </Link>  
        )
    }
}
