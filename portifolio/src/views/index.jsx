import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Section01 from  '../components/Section01';
import Section02 from  '../components/Section02';
import Section03 from  '../components/Section03';
import Section04 from  '../components/Section04';
import Footer from '../components/Footer';

import './style.scss';


export default class index extends Component {
  render() {
    return (
      <div>
        <NavBar />

        {/* /*SECTION 01*/}
        <div className="section01">
          <Section01 />
        </div>
        

        {/* /*SECTION 02*/}
        <div className="section02">
        <Section02 />
        </div>
        

         {/* /*SECTION 03 - GALLERY*/}
         {/* <Section03 /> */}

         {/* /*SECTION 04 - FAQ*/}
         <Section04 />

        <Footer />
      </div>
    )
  }
}
