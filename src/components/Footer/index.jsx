import React, { Component } from 'react';
import { FaAngellist, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

import EmailFooter from '../EmailFooter';

import './style.scss';

export default class Footer extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state={
      counterLinkedin: 1,
      counterStack: 1,
      counterGitHub:1,
      counterAngel:1,
      
    }

    this.myLinkedin=this.myLinkedin.bind(this);
    this.myGithub=this.myGithub.bind(this);
    this.myStack=this.myStack.bind(this);
    this.myAngelList=this.myAngelList.bind(this);
  }

  myLinkedin(){
    this.setState(previousState => ({
      counterLinkedin: previousState.counterLinkedin+1
    }));

    if(this.state.counterLinkedin%2 === 0){
      window.open("https://linkedin.com/in/ana-flavia-foppa-09427ba1/", "_blank");
    }
    
  }

  myStack(){
    this.setState(previousState => ({
      counterStack: previousState.counterStack+1
    }));

    if(this.state.counterStack%2 === 0){
      window.open("https://stackoverflow.com/users/11994495/ana-flavia-foppa", "_blank");
    }
  }

  myGithub(){
    this.setState(previousState => ({
      counterGitHub: previousState.counterGitHub+1
    }));

    if(this.state.counterGitHub%2 === 0){
      window.open("https://github.com/anaflaviafoppa", "_blank");
    }
  }

  myAngelList(){
    this.setState(previousState => ({
      counterAngel: previousState.counterAngel+1
    }));

    if(this.state.counterAngel%2 === 0){
      window.open("https://angel.co/u/ana-flavia-foppa", "_blank");
    }
  }

  

  render() {
    return (
      <footer className="Footer pt-5 text-md-center" id="contactme">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center ">

              <div className="pt-5">
                <h1>Drop me a line</h1>

                {/*Email with Tooltip*/}
                <EmailFooter />

                <h2>+351 913 839 769</h2>

                <div className="SocialMedia">

                  <FaLinkedin className="SocialMedia__icon" onClick={this.myLinkedin}/>
                 
                
                  <FaGithub className="SocialMedia__icon" onClick={this.myGithub}/>
                  
                  <FaStackOverflow className="SocialMedia__icon" onClick={this.myStack}/>
   
                  <FaAngellist className="SocialMedia__icon" onClick={this.myAngelList}/>
                  

                </div> { /* END OF SOCIAL MEDIA */}

                <p className="pt-5 pb-2">Ana Flavia Foppa © 2020</p>

              </div>
              
            </div>{/* /col */}
          </div>{/* /row */}
        </div> {/* /container */}
      </footer>
    )
  }
}
