import React, { Component } from 'react'

export default class Section02 extends Component {
  render() {
    return (
      <section id="courses">
        <div className="container ">
          <div className="row">

              <div className="col-md-6">


                <h1>Courses</h1>

                <h2>Essencial HTML CSS training <span>33 hrs</span></h2>

                <h2>Essencial HTML CSS training <span>33 hrs</span></h2>
        
                <h2>Essencial JQuery, Mtsql, PHP training <span>33 hrs</span></h2>

                <h2>PHP 7 Intermediary level <span>10 hrs</span></h2>
                
                <h2>Bachelor in Civil Engineering - UDESC <span>5 years</span></h2>

                <h2>Master in Civil Engineering - FCT <span>6 months</span></h2>

                <div>

                  <h1>Experience</h1>
                  
                  <h2>Internship at Embraco</h2>
                  <p><a href="http://www.embraco.com/">www.embraco.com</a></p>
                  <h3>set 2016 - ago 2017</h3>
                  
                  <p>I worked in Industrial Maintenance sector includes engineering areas such as mechanical, electrical and civil engineering.</p>

                  <h2>Civil engineer - Foppa Engenharia</h2>
                  <h3>set 2017 - ago 2019</h3>
                  <p>I managed several engineering projects, focusing on structural analysis.</p>

                </div>
              

              </div>{/*Final da primeria coluna */}


              <div className="col-md-6">
                <img src="./../images/estudo.png" alt="estudyimage"></img>
              </div> {/*Final da segunda coluna */}

          </div>{/* /Row */}

        
        </div>{/*Container */}
      
      </section>
    )
  }
}
