import React, { Component } from 'react';
import ItemGallery from '../ItemGallery';

import './style.scss';

export default class Section03 extends Component {
  constructor(){
    super();
    this.state={
      counterArpina: 2,
      counterMagicalForest:2,
      counterMasterLara:2,
      counterTasksy:2
    }

    this.arpina=this.arpina.bind(this);
    this.magicalForest=this.magicalForest.bind(this);
    this.masterLara=this.masterLara.bind(this);
    this.tasksy=this.tasksy.bind(this);
  };

  arpina(){
    this.setState(previousState => ({
      counterArpina: previousState.counterArpina+1
    }));

    if(this.state.counterArpina%2 === 0){
      window.open("https://www.arpina.com.br/", "_blank");
    }
  }

  magicalForest(){
    this.setState(previousState => ({
      counterMagicalForest: previousState.counterMagicalForest+1
    }));

    if(this.state.counterMagicalForest%2 === 0){
      window.open("https://magicaforestanafoppa.netlify.com", "_blank");
    }
  }

  masterLara(){
    console.log('masterlara')
    this.setState(previousState => ({
      counterMasterLara: previousState.counterMasterLara+1
    }));
    console.log('this.state.counterMasterLara',this.state.counterMasterLara)

    if(this.state.counterMasterLara%2 === 0){
      window.open("https://master-lara.herokuapp.com/", "_blank");
    }
  }

  tasksy(){
    this.setState(previousState => ({
      counterTasksy: previousState.counterTasksy+1
    }));

    if(this.state.counterTasksy%2 === 0){
      window.open("https://tasksyapp.herokuapp.com/", "_blank");
    }
  }



  render() {
    return (
      <section className="section03">
        <div className="container pt-5 pb-5">
         
            <ItemGallery 
              left={true}
              title="Arpina"
              description="Front-end development of Arpina's institutional website using Wordpress."
              image="./../images/arpina.png"
              functionClick={this.arpina}
            />
          
            <ItemGallery 
              left={false}
              title="Magical Forest"
              description="Full development of the 2D game on Canvas over in 5 days. 
              The movements of the characters were programmed in JavaScript using spritesheet. 
              The concept of the game is the rivalry between two characters, Orc and Elf,
              who cast spells at each other, the winner will be the survivor of that battle!"
              image="./../images/magical-forest.png"
              functionClick={this.magicalForest}
            />
         
            <ItemGallery 
              left={true}
              title="Master Lara"
              description="Master Lara is an MVC application. Developed in NODEJS, Express, HBS and SCSS. 
              The application shows the best recipes, through an API, that can be made with what you have 
              in the refrigerator. 
              That way it avoids waste. The entire development of Master Lara was completed in 5 days."
              image="./../images/master-lara.png"
              functionClick={this.masterLara}
            />
          
          

          <ItemGallery 
            left={false}
            title="Tasksy"
            description="Tasksy is an application focused on small businesses.  that aims to keep 
            the environment organized in a more fun way. The workspace is created, 
            and new tasks are added, such as keeping the desk organized, watering the plants. 
            Whoever does the tasks will accumulate points. At the end of the week, 
            the employee who obtains more points wins. 
            The development of the entire application was completed in 7 days."
            image="./../images/taskly.png"
            functionClick={this.tasksy}
          />
        </div>
        
      
      </section>
    )
  }
}
