import React, { Component } from 'react';
import Main from "./components/Main";
import Navbarr from "./components/Navbar";


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbarr/>
        <Main/>
        </React.Fragment>
    )
  }
}

