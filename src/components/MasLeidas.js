import React, { Component } from 'react';
import {Consumer} from "../context";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

export default class MasLeidas extends Component {
    render() {
        return (
            <Consumer>
           {(data)=>{
               return(                   
                   <div className="masL">
                   <h3>Mas Leídas</h3>
                   {data.noticiasMasLeidas.map((x)=>{
                    return(
                        <div key={x.id} onClick={()=>{data.handleDetail(x.id);data.categoriaOff()}} className="masN">
                       <Link to="/detalle" style={{color:"black"}}>                        
                       <Image src={x.img} alt="" fluid/>
                       <p>{x.titulo}</p>                       
                       </Link>
                       </div>
                       )
                   })}
                    </div>
               )
           }}
            </Consumer>
        )
    }
}
