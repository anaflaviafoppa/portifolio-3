import React from 'react';
import './style.scss';

 const ItemGallery = (props) => {
  return (
    <div className="row ItemGallery">
      <div className="col-lg-6 d-flex justify-content-center align-items-center">
        {props.left ? 
          <div className="text-left pb-3"> 
            <h1 onClick={props.functionClick}>{props.title}</h1>
            <p >{props.description}</p>
          </div>  
        : 
          <img onClick={props.functionClick} className="imgLeft" src={props.image} alt={props.title}></img>
        }
      </div>

      <div className="col-lg-6 d-flex justify-content-center align-items-center text-md-right">
        
          {props.left ? 
            <img src={props.image} alt={props.title} onClick={props.functionClick}></img>
            : 
            <div> 
              <h1 onClick={props.functionClick}>{props.title}</h1>
              <p className="pb-3">{props.description}</p>
              <img className="imgRight d-flex justify-content-center" src={props.image} alt={props.title}></img>
            </div> 
          }
        

      </div>
    </div>
  )
}



export default ItemGallery;