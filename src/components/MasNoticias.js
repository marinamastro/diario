import React, { Component } from 'react';
import Noticia from "./Noticia";
import MasLeidas from "./MasLeidas"
import {Row,Col} from "react-bootstrap";


export default class MasNoticias extends Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col md={10} lg={10} >
                        <Row  id="contenedorMasNoticias">
                {this.props.datos.map(item=>{
                    return <Noticia datos={item} key={item.id} todos={this.props.todos}/>
                })}
                        </Row>
                    </Col>
                    <Col md={2} lg={2} >
                        <MasLeidas/>
                    </Col>
                </Row>
           </React.Fragment>
        )
    }
}
