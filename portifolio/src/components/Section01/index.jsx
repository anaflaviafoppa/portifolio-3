import React, { Component } from 'react';
import './style.scss';

export default class Section01 extends Component {
  render() {
    return (
      <section id="#home" className="pt-md-5 pb-md-5 Home">
        <div className="container">
          <div className="row Home__Row pr-1">

            {/*First COL */}
            <div className="col-md-5">
              <img className="img-fluid" align="center" src="./../images/Perfil.png"></img>
            </div>{/* /col */}
            
            {/*First COL */}
            <div className="col-md-7 text-lg-right text-sm-center 
            d-flex justify-content-md-end align-items-center justify-content-sm-start">
            
            <div className="Home__Text">
              <h1 className="mb-sm-3">High value experiences for all screens</h1>

              <h2 className="pb-sm-3">I‘m Ana Flavia Foppa Web developer looking 
              for opportunities 
              to learn and create digital experiences 
              that simplify and enhance value for companies.</h2>
            </div>
              

            </div>{/* /col */}

          </div>{/* /row */}
        </div> {/* /container */}
      </section>
    )
  }
}
