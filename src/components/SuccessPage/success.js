import React from "react";
import Logo from "./img/devondemand.png";
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import ThanksForm from "../ThanksForm/thanks.js";
import "./success.css";

const SuccessPage = () =>{
    return(
        <div className="success">
            <div className="container">
                <nav className="success_header">
                    <ul className="success_header-list">
                        <li className="success_header-item logo"><Link to="/"><img src={Logo} alt="logo"/></Link></li>
                        <li className="success_header-item">
                            <Button className="button_start" variant="contained" color="primary">
                            Make another order
                            </Button>
                        </li>
                    </ul>
                </nav>
            
                <ThanksForm />

                <nav className="success_footer">
                    <ul className="success_footer-list">
                        <li className="success_footer-item">Customer support</li>
                        <li className="success_footer-item">© 2020, DEVONDEMAND.CO. All Rights Reserved.</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SuccessPage;