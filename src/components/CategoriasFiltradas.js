import React from 'react';
import {Row,Image,Container,Col} from "react-bootstrap";
import {Consumer} from "../context";
import {Link} from "react-router-dom"


export default function CategoriasFiltradas(props) {
    const{titulo,descripcion,img,id} = props.datos    
    return (
        <Consumer>
           {(data)=>{
               return(  
                <div className="categoria" onClick={()=>{data.handleDetail(id);
                data.handleClicks(id);data.categoriaOff()}}>
                <Link to={`/detalle/${id}`} style={{color:"black"}}>                             
                <Container>
                <Col md={10} lg={10} >                
                <Row>
                  <h3><strong>{titulo}</strong></h3>
                </Row>
                 <Row>
                 {descripcion}
                </Row>
                <Row  >
                <Col md={6} lg={6} style={{paddingLeft: 0,marginTop: "1rem"}}> 
                    <Image src={img} alt="" fluid/>
                </Col>
                </Row>
                </Col>
                <hr/>                
                </Container>                
                </Link> 
                </div>
               )
           }}
            </Consumer>
        
    )
}
