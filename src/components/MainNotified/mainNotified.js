import React from 'react';
import "./mainNotified.css";
import Button from '@material-ui/core/Button';
import notified from "./img/ff.svg";

const MainNotified = () => {
  return (
   <div className="notified">
        <div className="notified-wrapper">
            <div className="section-start">
                <h3>Get notified at every single steps.</h3>
                <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                <Button variant="contained" color="primary" href="#contained-buttons">Start now</Button>
            </div>
            <div className="notified-pic">
                <img src={notified} alt="notified"/>
            </div>
        </div>
   </div>
  )
}

export default MainNotified;