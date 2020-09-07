import React from 'react';
import "./mainProcess.css";
import Button from '@material-ui/core/Button';
import { Link } from 'react-scroll'

const MainProcess = () => {
  return (
   <div className="process">
        <div className="container">
            <div className="process-wrapper">
              <div className="section-start center">
                <h3>This is our working process.</h3>
                <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                <Link
                  activeClass=""
                  to="wrapper_full_form"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {500}
                  ><Button variant="contained" color="primary">Start now</Button></Link>
              </div>
              <div className="process-video">
                  <a href="#">Watch the full video (2 min)</a>
              </div>
            </div>
        </div>
   </div>
  )
}

export default MainProcess;