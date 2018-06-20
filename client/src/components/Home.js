import React, {Component} from 'react';
import Carousel from "./Carousel";

export default class Home extends Component {
  render(){
    return(
      <div id="container">
          <Carousel style={{display:"flex", justifyContent:"center"}}/>
      </div>
    )
  }
}
