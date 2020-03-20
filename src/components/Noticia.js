import React, { Component } from 'react';
import {Col,Image} from "react-bootstrap";
import {Link} from "react-router-dom"

export default class Noticia extends Component {
    render() {
        const {img,titulo,id} = this.props.datos
        const {handleDetail,handleClicks} = this.props.todos
       
        return (           
                
                <Col md={4} lg={4} xl={4} className="masNoticia" onClick={()=>handleClicks(id)}>
                <Link to={`/detalle/${id}`} style={{color:"black"}}>
                <div onClick={()=>{handleDetail(id)}}>
                <Image src={img} alt="" fluid/>
                <p><strong>{titulo}</strong></p>
                </div>
                </Link>
                </Col>                
               
           
        )
    }
}
