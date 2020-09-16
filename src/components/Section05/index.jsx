import React, { Component } from "react";
import "./style.scss";

export default class Section02 extends Component {
  render() {
    return (
      <section id="brands" className="Section05 pt-5 pb-5">
            <div className="container ">
                
            <h2 className="mb-1 mt-2 text-center">Brands that I've worked with:</h2>
          <div className="row pt-2 pb-5 d-flex align-items-center justify-content-between">
            
                    <div className="col d-flex justify-content-center">
              <img
                className="img-brand glintt"
                src="./../images/glintt.jpg"
                alt="glintlogo"
              ></img>
            </div>

            <div className="col d-flex justify-content-center">
              <img
                className="img-brand"
                src="./../images/TP.png"
                alt="TPlogo"
              ></img>
            </div>

            <div className="col d-flex justify-content-center mt-5">
              <img
                className="img-brand ducafe"
                src="./../images/ducafe.png"
                alt="ducafelogo"
              ></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
