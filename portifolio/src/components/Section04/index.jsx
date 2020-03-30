import React, { Component } from 'react';
import { Accordion } from 'react-bootstrap';

import './style.scss';

/*COMPONENTS*/
import ItemAccordion from '../ItemAccordion';

export default class Section04 extends Component {
  render() {
    return (
      <section className="container Section04" id="faq">
        
      <Accordion defaultActiveKey="0">
        <ItemAccordion
        eventKey={1}
        title="Why did you feel the need of a change in your career choices?"
        body="I've always admired Civil Engineering, and it was this area that allowed me to 
        develop my logical thinking, in major grades such as Calculus and its five-hour tests. 
        Despite of that, I realised that the innovation on civil engineering is quite slow and 
        new methods aren't always encouraged. My goal in life is finding a perfect sync between 
        logic, visual arts and constant innovation, and that seemed to be lacking on traditional 
        Civil Engineering. I appreciate all the knowledge that engineering has given me, but my 
        future is in web development" />


      <ItemAccordion
        eventKey={2}
        title="What's your favourite kind of programming languages?"
        body="I can understand how easily
         I can handle more complex languages while absorbing visual detail. 
        I've been really enjoying React and also NodeJS." />

      <ItemAccordion
        eventKey={3}
        title="What makes you different?"
        body="Since I was a teenager, I found myself loving to work on visual projects and using tools 
        like Adobe Photoshop and Adobe Illustrator. And I couldn't help but thinking I should head 
        that way. Although, my flair with numbers and a family of civil engineers influenced me to 
        opt in the same path. Today, I see that the visual area, that has always been my passion, 
        can integrate on engineering logic and it gives me a keener perspective of everything." />

      <ItemAccordion
        eventKey={4}
        title="Hobbies?"
        body="I love painting (you're more than welcome to see a little more here). 
        And I'm very into reading and understanding more about art history. Also, 
        I am currently studying a third language which is French. (Merci!)" />

      </Accordion>
      
      </section>
    )
  }
}
