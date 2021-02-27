import React, { Component } from 'react';
import './style.scss';

export default class Section02 extends Component {
  render() {
    return (
      <section id='brands' className='Section05 pt-5 pb-5'>
        <div className='container '>
          <h2 className='mb-1 mt-2 text-center'>
            Brands that I've worked with:
          </h2>
          <div className='row pt-4 pb-5 d-flex align-items-center justify-content-between'>
            <div className='col-12 col-sm-3 d-flex justify-content-center'>
              <img
                className='img-brand'
                src='./../images/BMW.svg'
                alt='bmw logo'
              ></img>
            </div>

            <div className='col-12 col-sm-3 d-flex justify-content-center'>
              <img
                className='img-brand'
                src='./../images/TP.png'
                alt='TPlogo'
              ></img>
            </div>

            <div className='col-12 col-sm-3 d-flex justify-content-center '>
              <img
                className='img-brand'
                src='./../images/critical.svg'
                alt='critical techworks logo'
              ></img>
            </div>

            <div className='col-12 col-sm-3 d-flex justify-content-center'>
              <img
                className='img-brand'
                src='./../images/glintt.jpg'
                alt='bmw logo'
              ></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
