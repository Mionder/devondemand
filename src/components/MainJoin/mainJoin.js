import React from 'react';
import "./mainJoin.css";
import Button from '@material-ui/core/Button';
import woman from "./img/woman.png";
import stars from "./img/stars.png";
import star from "./img/star1.svg";
import { Link } from 'react-scroll'

const MainJoin = () => {
  return (
   <div className="join">
       <div className="container">
           <div className="join-wrapper">
                <div className="section-start">
                    <h3>Join the club.</h3>
                    <p>Hundreds of leading creative companies are working with us to develop their designs.</p>
                    <Link
                        activeClass=""
                        to="wrapper_full_form"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        ><Button variant="contained" color="primary" href="#contained-buttons">Start now</Button></Link>
                </div>
           </div>
       </div>
       <div className="join-comments">
           <img className="join-comments__stars" src={stars} alt="comments"/>
           <div className="join-show">
                <div className="join-sh">
                    <img className="join-commnets__view" src={woman} alt="join"/>
                </div>
                <div className="join-show__comment">
                    <div className="join-show__header">
                        <h6>Sammy Owen</h6>
                        <div className="join-show__stars">
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                            <img src={star} alt="star"/>
                        </div>
                    </div>
                    <p>Hiring remote makes it more important than ever to work together as a team to attract, review and hire the best candidates.</p>
                </div>
           </div>
       </div>
   </div>
  )
}

export default MainJoin;