import React from 'react';
import {Link} from 'react-router-dom';

const ImageSlide = ({ url }) => {
    return (
        <div className="image-container">
         <img className="image" src={url} width="95%" />
         <Link to='/shop-shoes'><button className="button">Shop Now</button></Link>
         </div>
    );
  }

  export default ImageSlide;