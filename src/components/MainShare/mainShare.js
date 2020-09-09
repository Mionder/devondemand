import React from 'react';
import "./mainShare.css";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import adobe from "./img/adobe.svg";
import figma from "./img/figma.svg";
import sketch from "./img/sketch.svg";
import { Link } from 'react-scroll'

const MainShare = () => {
  return (
   <div className="share">
       <div className="container">
           <div className="share-wrapper">
            <div className="section-start center">
                <h3>We developed extensions, so you can share your design easily </h3>
                <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                <Link
                    activeClass=""
                    to="wrapper_full_form"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
                    ><Button variant="contained" color="primary" >Start now</Button></Link>
              </div>
              <div className="share-items">
                   <div className="share-item">
                    <Card >
                            <h5>Adobe XD</h5>
                            <a className="share-items__link" >See the extension</a>
                            <img src={adobe} alt="Adobe XD"/>
                        </Card>
                   </div>
                    <div className="share-item">
                        <Card >
                            <h5>Sketch</h5>
                            <a className="share-items__link"  >See the extension</a>
                            <img src={sketch} alt="Sketch"/>
                        </Card>
                    </div>
                  <div className="share-item">
                    <Card >
                        <h5>Figma</h5>
                        <a  className="share-items__link" >See the extension</a>
                        <img src={figma} alt="Figma"/>
                    </Card>
                  </div>
              </div>
           </div>
       </div>
   </div>
  )
}

export default MainShare;