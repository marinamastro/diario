import React from 'react';
import {Container,Col,Row,NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Consumer} from "../context";


export default function Navbar() {
    return(    
        <Consumer>
            {(data)=>{  
                const secciones=["ECONOMÍA","DEPORTES","SALUD","POLÍTICA","MUNDO"];                  
                return(
                  <Container fluid id="Ctitulo">                 
                  <Row  className="text-center">  
                  <Col md="auto" lg={1} xl={1} xs={2} sm={2}>
                    <NavDropdown title="SECCIONES" id="basic-nav-dropdown">
                        {secciones.map((x,i)=>{                                                     
                            return <NavDropdown.Item key={i} id={x}
                             onClick={()=>data.filtrarCategoria(x)}>
                                 {x}
                            </NavDropdown.Item>                           
                        })}
                       
                </NavDropdown>                    
                  </Col>              
                     <Col md={11} lg={11} xl={11} xs={10} sm={10}>                    
                           <Link to="/" style={{color:"white"}}
                           onClick={()=>{data.categoriaOff()}}
                           ><span id="titulo">LA VERDAD</span></Link>
                      </Col>
                  </Row>
              </Container>
                )
            }              
            }
        
        </Consumer>
        
    )
}
