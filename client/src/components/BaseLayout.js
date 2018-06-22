import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

export default class BaseLayout extends Component {
  render(){
    return(
      <div className="container">
        <div className="nav-bar">
          <Link style={{color:'#464547'}} to="/">Home</Link>
          <div className="top-right-nav">
          <Link to='/shop-shoes' activeClassName="selected" style={{color:'#464547', paddingRight:"10px"}}>Shoes</Link>
          <Link to='/shop-hats' activeClassName="selected" style={{margin: '5px', color:'#464547',paddingRight:"10px"}}>Hats</Link>
          <Link to='/shop-shirts' activeClassName="selected" style={{color:'#464547', paddingRight:"10px"}}>Shirts</Link>
          </div>
      </div>
        {this.props.children}
      <div className="nav-bar">
      <div className="bottom-nav-bar">
      <Link to='/about' style={{margin:'5px', color:'#464547'}}>About Us</Link>
      <Link to='/contact' style={{margin:'5px', color:'#464547'}}>Contact Us</Link>
      </div>
    </div>
    </div>
    )
  }
}