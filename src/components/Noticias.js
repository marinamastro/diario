import React, { Component } from 'react'
import {Consumer} from "../context";
import MasNoticias from "./MasNoticias";
import NoticiaPrincipal from "./NoticiaPrincipal";
import Categoria from "./Categoria"



export default class Noticias extends Component {
    render() {

        return (           
                <Consumer>  
                    {(datos)=>{
                        
                            if(datos.categoriaOn){
                                return <Categoria />
                            }else{
                                return <React.Fragment>                               
                                <NoticiaPrincipal datos={datos.noticiaPrincipal} todos={datos} />
                                <MasNoticias datos={datos.news} todos={datos}/>                                
                                </React.Fragment>
                            }
                              }
                     }                      
               </Consumer>          
           )
    }
}
