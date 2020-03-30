import React, { Component } from 'react';
import ItemGallery from '../ItemGallery';

export default class Section03 extends Component {
  render() {
    return (
      <section>
        <div className="container">
          <ItemGallery 
            left={true}
            title="Arpina"
            description="Sanctus lorem diam sadipscing ipsum sed vero et, amet kasd."
            image="./../images/arpina.png"
          />

          <ItemGallery 
            left={false}
            title="Magical Forest"
            description="Sanctus lorem diam sadipscing ipsum sed vero et, amet kasd."
            image="./../images/magical-forest.png"
          />

          <ItemGallery 
            left={true}
            title="Master Lara"
            description="Sanctus lorem diam sadipscing ipsum sed vero et, amet kasd."
            image="./../images/master-lara.png"
          />

          <ItemGallery 
            left={false}
            title="Tasksy"
            description="Sanctus lorem diam sadipscing ipsum sed vero et, amet kasd."
            image="./../images/taskly.png"
          />
        </div>
        
      
      </section>
    )
  }
}
