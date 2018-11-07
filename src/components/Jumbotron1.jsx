import React, { Component } from "react";
import "./Jumbotron1.css"

class Jumbotron1 extends Component{
  render(){
    return(
      <div className="jumbotron1 jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">{this.props.title}</h1>
          <p className="lead">{this.props.subtitle}</p>
        </div>
      </div>
    );
  }
}

export default Jumbotron1
