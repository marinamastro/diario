import React, { Component } from 'react';
import Noticias from "./Noticias";
import {Container} from "react-bootstrap";
import {Switch,Route} from "react-router-dom";
import Detalle from "./Detalle";




export default class Main extends Component {
    render() {
        return (
          <Container>
            <Switch>
              <Route exact path="/" component={Noticias}/>
              <Route exact path="/detalle" component={Detalle}/>             
            </Switch>            
          </Container>
          
        )
    }
}
