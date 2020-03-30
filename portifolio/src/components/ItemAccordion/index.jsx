import React, { Component } from 'react'
import {Card, Accordion } from 'react-bootstrap';


export default class ItemAccordion extends Component {
  constructor(props){
    super(props);
    this.state={
      click: true,
      image: './../images/plus.svg'
    }

    this.handleButtonChange=this.handleButtonChange.bind(this);
  }

  handleButtonChange(){
    this.setState(previousState => ({
      click: !previousState.click
    }));

    if(this.state.click){
      this.setState({
        image: './../images/x.svg'
      })
    }else{
      this.setState({
        image: './../images/plus.svg'
      })
    }
  }


  render() {
    return (
      <Card onClick={this.handleButtonChange}>
      <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey}>
      {this.props.title} <img src={this.state.image} alt="control" width="30" height="30"></img>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={this.props.eventKey}>
        <Card.Body>{this.props.body}</Card.Body>
      </Accordion.Collapse>
    </Card>
    )
  }
}


