import React from 'react';
import './style.scss';

 const ItemGallery = (props) => {
  return (
    <div className="row ItemGallery">
      <div className="col-lg-6 d-flex justify-content-sm-center align-items-center">
        {props.left ? 
          <div className="text-left pb-3"> 
            <h1 onClick={props.functionClick}>{props.title}</h1>
            <h3>{props.languages}</h3>
            <p >{props.description}</p>
            <h3>{props.duration}</h3>
          </div>  
        : 
          <img onClick={props.functionClick} className="imgLeft" src={props.image} alt={props.title}></img>
        }
      </div>

      <div className="col-lg-6 d-flex justify-content-sm-center align-items-center text-md-right text-sm-left">
        
          {props.left ?
            
            <img src={props.image} alt={props.title} onClick={props.functionClick}></img>
            : 
            <div> 
              <h1 onClick={props.functionClick}>{props.title}</h1>
              <h3>{props.languages}</h3>
              <p className="pb-3">{props.description}</p>
              <h3>{props.duration}</h3>
              <img className="imgRight d-flex justify-content-center" src={props.image} alt={props.title}></img>
            </div> 
          }
        

      </div>
    </div>
  )
}



export default ItemGallery;