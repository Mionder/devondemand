import React from "react";
import DoneIcon from '@material-ui/icons/Done';
import "./about.css";

const About = () =>{
    return(
        <section className="about">
            <div className="container">
                <div className="about_wrapper">
                    <h3 className="about_title">Front end development 
                    on demand</h3>
                    <div className="about_details">
                        <p className="details_info">Attract talent with beautiful job posts and
manage candidates in an easy-to-use and powerful tool.</p>
                        <ul className="advantages">
                            <li className="advantages_item">
                                <DoneIcon className="done_icon"/>
                                <p className="advantage_info">Delivery in 3 business days</p>
                            </li>
                            <li className="advantages_item">
                                <DoneIcon className="done_icon"/>
                                <p className="advantage_info">No contract</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;