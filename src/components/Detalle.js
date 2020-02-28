import React, { Component } from 'react';
import {Consumer} from "../context";
import Categoria from "./Categoria";
import NoticiaDetalle from "./NoticiaDetalle"


export default class Detalle extends Component {
    render() {
        return (
           <Consumer>
               {(data)=>{                   
                   if(data.categoriaOn){
                    return <Categoria />
                    }
                  return(                     
                    <NoticiaDetalle />
                  )
               }}
           </Consumer>
        )
    }
}
