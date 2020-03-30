import React from 'react';
import './style.scss';

 const ItemGallery = (props) => {
  return (
    <div className="row ItemGallery">
      <div className="col-6 d-flex justify-content-start align-items-center text-left">
        {props.left ? 
          <div> 
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div>  
        : 
          <img src={props.image} alt={props.title}></img>
        }
      </div>

      <div className="col-6  d-flex justify-content-end align-items-center text-right ">
        {props.left ? 
          <img src={props.image} alt={props.title}></img>
          : 
          <div> 
            <h1>{props.title}</h1>
            <p>{props.description}</p>
          </div> 
        }
      </div>
    </div>
  )
}

export default ItemGallery;