import React from 'react';
import {Container,Col,Row,NavDropdown,Navbar,Nav} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Consumer} from "../context";


export default function Navbarr() {
    return(    
        <Consumer>
            {(data)=>{  
                const secciones=["ECONOMÍA","DEPORTES","SALUD","POLÍTICA","MUNDO"];                  
                return(
                  <Container fluid id="Ctitulo">                 
                  <Row  className="text-center">  
                  <Col md={2} lg={2} xl={2} xs={2} sm={2}>
                  <Navbar bg="blue" expand="lg">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                    <NavDropdown title="SECCIONES" id="basic-nav-dropdown" bg="dark">
                        {secciones.map((x,i)=>{                                                     
                            return <NavDropdown.Item key={i} id={x}
                             onClick={()=>data.filtrarCategoria(x)}>
                                 {x}
                            </NavDropdown.Item>                           
                        })}                                           
                </NavDropdown>
                </Nav>  
                </Navbar.Collapse>  
                </Navbar>                
                  </Col>              
                     <Col md={10} lg={10} xl={10} xs={10} sm={10}>                    
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
