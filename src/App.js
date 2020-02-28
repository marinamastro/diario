import React, { Component } from 'react';
import Main from "./components/Main";
import Navbar from "./components/Navbar";


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Main/>
        </React.Fragment>
    )
  }
}

