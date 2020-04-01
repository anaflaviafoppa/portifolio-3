import React, { Component } from 'react';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './style.scss';


export default class EmailFooter extends Component {
  constructor(props){
    super(props);
    this.state={
      value: 'anaffoppa@gmail.com',
      copied: false
    }
  }
  render() {
    return (
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Click to Copy!</Tooltip>}>
        <span className="d-inline-block">
          <CopyToClipboard text={this.state.value}
            onCopy={() => this.setState({copied: true})}>
                   
              <p className="EmailFooter__paragraph">anaffoppa@gmail.com</p>
                     
          </CopyToClipboard>
        </span>
      </OverlayTrigger>
    )
  }
}
