import React from 'react';
import { FaAngellist, FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Drop me a line</h1>

            <span>
              anaffoppa@gmail.com
            </span>

            <h3>+351 913 839 769</h3>

            <div class="socialmedia">

              <button type="button" class="btn btn-lg btn_site" onclick="mylinkedin()" >
                <FaLinkedin />
              </button>

              <button type="button" class="btn  btn-lg btn_site"  onclick="mygithub()" >
                <FaGithub />
              </button>

              <button type="button" class="btn btn_site btn-lg"  onclick="mystack()">
                <FaStackOverflow />
              </button>

              <button type="button" class="btn btn_site btn-lg">
                <FaAngellist />
              </button>
              
              
            </div> { /* END OF SOCIAL MEDIA */}

          </div>{/* /col */}
        </div>{/* /row */}
      </div> {/* /container */}
    </footer>
  )
}


export default Footer;