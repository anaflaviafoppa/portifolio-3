import React, { Component } from 'react'
import {Card, Accordion } from 'react-bootstrap';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io';


import './style.scss';


export default class ItemAccordion extends Component {
  constructor(props){
    super(props);
    this.state={
      click: true,
      image: <IoIosArrowDropdownCircle className="Card__Title-icon"/>
    }

    this.handleButtonChange=this.handleButtonChange.bind(this);
  }

  handleButtonChange(){
    this.setState(previousState => ({
      click: !previousState.click
    }));

    if(this.state.click){
      this.setState({
        image: <IoIosArrowDropupCircle  className="Card__Title-icon"/>
      })
    }else{
      this.setState({
        image: <IoIosArrowDropdownCircle className="Card__Title-icon"/>
      })
    }
  }


  render() {
    return (
      <Card className="Card" onClick={this.handleButtonChange}>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} 
        className=" Card__Title">
          <div className="row d-flex justify-content-between">
            <div className="col-8">
              {this.props.title}
            </div>

            <div className="col-4 d-flex justify-content-end">
              {this.state.image}
            </div>
          </div>
         
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={this.props.eventKey}>
          <Card.Body className="Card__Body text-justify">{this.props.body}</Card.Body>
        </Accordion.Collapse>
    </Card>
    )
  }
}


