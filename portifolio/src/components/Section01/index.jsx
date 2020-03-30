import React, { Component } from 'react';
import './style.scss';

export default class Section01 extends Component {
  render() {
    return (
      <section id="#home" className="pt-5 pb-5 Home">
        <div className="container">
          <div className="row">

            {/*First COL */}
            <div className="col-md-5">
              <img className="img-fluid" align="right" src="./../images/Perfil.png"></img>
            </div>{/* /col */}
            
            {/*First COL */}
            <div className="col-md-7 text-lg-right text-sm-center 
            d-flex justify-content-end align-items-center">
            
            <div>
              <h1>High value experiences for all screens</h1>

              <h2>I‘m Ana Flavia Foppa Web developer looking for opportunities 
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
