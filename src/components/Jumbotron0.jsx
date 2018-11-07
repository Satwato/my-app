import React, { Component } from "react";
import "./Jumbotron0.css"

class Jumbotron0 extends Component{
  render(){
    return(
      <div className="jumbotron0 jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron0
