import React, { Component } from 'react';
import './style.scss';

export default class Section02 extends Component {
  render() {
    return (
      <section id="courses" className="Section02 pt-5 pb-5">
        <div className="container ">
          <div className="row pt-5 pb-5">

              <div className="col-md-6">


                <h1 className="mb-md-4">Courses</h1>

                <h2>Ironhack - Web Development</h2>

                  <div className="row">
                     <div className="col">
                     <ul>
                        <li>React</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>REST API</li>
                      </ul>
                     </div> 

                     <div className="col">
                      <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>HBS</li>
                        <li>CSS/SASS</li>
                      </ul>
                     </div>
                  </div>
                    
                      

                <h2>Bachelor in Civil Engineering</h2>
                <h2>Universidade do Estado de Santa Catarina</h2>
                <h3>5 years</h3>
                
                <h1 className="mb-md-4">Experience</h1>

                <h2>Civil engineer - Foppa Engenharia</h2>
                <h3>set 2017 - dez 2019</h3>
                <p>I managed several engineering projects, 
                focusing on structural analysis. 
                Structural projects are responsible 
                for the design of slabs, beams, columns, foundations. </p>
                  
                <h2>Internship at Embraco</h2>
                {/* <p><a href="http://www.embraco.com/">www.embraco.com</a></p> */}
                <h3>set 2016 - ago 2017</h3>
                  
                <p>I worked in Industrial Maintenance sector includes 
                engineering areas such as mechanical, electrical and civil engineering.</p>

                

                
              

              </div>{/*Final da primeria coluna */}


              <div className="col-md-6 d-flex align-items-center Section02__img">
                <div>
                  <img src="./../images/estudo.png" alt="estudyimage"></img>
                </div>
                
              </div> {/*Final da segunda coluna */}

          </div>{/* /Row */}

        
        </div>{/*Container */}
      
      </section>
    )
  }
}
