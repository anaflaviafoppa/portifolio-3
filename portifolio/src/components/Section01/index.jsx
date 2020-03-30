import React, { Component } from 'react'

export default class Section01 extends Component {
  render() {
    return (
      <section id="#home">
        <div className="container">
          <div className="row">

            {/*First COL */}
            <div className="col-md-5">
              <img className="img-fluid" align="right" src="./../images/Perfil.png"></img>
            </div>{/* /col */}
            
            {/*First COL */}
            <div className="col-md-7 text-lg-right text-sm-center">
              <h1>High value experiences for all screens</h1>

              <h2>I‘m Ana Flavia Foppa Web developer looking for opportunities 
              to learn and create digital experiences 
              that simplify and enhance value for companies.</h2>

            </div>{/* /col */}

          </div>{/* /row */}
        </div> {/* /container */}
      </section>
    )
  }
}
