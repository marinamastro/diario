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
                  <Col md={2} lg={2} xl={2} xs={12} sm={12}>
                    <NavDropdown title="SECCIONES" id="basic-nav-dropdown">
                        {secciones.map((x,i)=>{                                                     
                            return <NavDropdown.Item key={i} id={x}
                             onClick={()=>data.filtrarCategoria(x)}>
                                 {x}
                            </NavDropdown.Item>                           
                        })}
                       
                </NavDropdown>                    
                  </Col>              
                     <Col md={10} lg={10} xl={10} xs={12} sm={12}>                    
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
