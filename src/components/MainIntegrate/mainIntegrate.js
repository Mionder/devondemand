import React from 'react';
import "./mainIntegrate.css";
import Button from '@material-ui/core/Button';
import tools from "./img/group.png";
import { Link } from 'react-scroll';

const MainIntegrate = () => {
  return (
   <div className="integrate">
        <div className="integrate-wrapper">
            <div className="section-start center">
                <h3>We will integrate any tool you love</h3>
                <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                <Link
                        activeClass=""
                        to="wrapper_full_form"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {600}
                        ><Button variant="contained" color="primary" href="#contained-buttons">Start now</Button></Link>
            </div>
            <div className="integrate-tools">
                <img src={tools} alt="tools"/>
            </div>
        </div>
   </div>
  )
}

export default MainIntegrate;