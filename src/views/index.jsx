import React, { Component } from 'react';
import NavBar from '../components/Navbar';
import Section01 from '../components/Section01';
import Section02 from '../components/Section02';
import Section03 from '../components/Section03';
import Section04 from '../components/Section04';
import Section05 from '../components/Section05';
import Footer from '../components/Footer';

import './style.scss';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
    };

    this.collapse = this.collapse.bind(this);
  }

  collapse() {
    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    return (
      <div>
        <NavBar collapse={() => this.collapse()} toggle={this.state.toggle} />

        {/* /*SECTION 01*/}
        <div className='section01'>
          <Section01 />
        </div>
        {/* /*SECTION 05 - PROJETOS*/}
        <div className='section05'>
          <Section05 />
        </div>

        {/* /*SECTION 02*/}
        <div className='section02'>
          <Section02 />
        </div>

        {/* /*SECTION 03 - GALLERY
        <div className="section01">
          <Section03 />
        </div> */}

        {/* /*SECTION 04 - FAQ*/}
        <div className='section04'>
          <Section04 />
        </div>

        <Footer />
      </div>
    );
  }
}
