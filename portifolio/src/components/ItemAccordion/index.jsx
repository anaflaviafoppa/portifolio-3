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
      <Card onClick={this.handleButtonChange}>
        <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} 
        className="d-flex justify-content-between Card__Title">
        {this.props.title} {this.state.image}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey={this.props.eventKey}>
          <Card.Body className="Card__Body">{this.props.body}</Card.Body>
        </Accordion.Collapse>
    </Card>
    )
  }
}


