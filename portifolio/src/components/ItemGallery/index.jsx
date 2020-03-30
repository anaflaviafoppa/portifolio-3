import React from 'react'

 const ItemGallery = (props) => {
  return (
    <div className="row">
      <div className="col-6">
        {props.left ? 
          <div> 
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div>  
        : 
          <img src={props.image} alt={props.title}></img>
        }
      </div>

      <div className="col-6">
        {props.left ? 
          <img src={props.image} alt={props.title}></img>
          : 
          <div> 
            <h3>{props.title}</h3>
            <p>{props.description}</p>
          </div> 
        }
      </div>
    </div>
  )
}

export default ItemGallery;