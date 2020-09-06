import React from 'react';
import { Link } from 'gatsby';
import "./header.css";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import KissIcon from "./img/kiss.png";
import Logo from "./img/devondemand.png";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";

const Header = () => {
  // const container = document.querySelector(".mob-humburger");

  // container.onclick = function(){
  //   container.classList.toggle("open");
  return (
    <header className="header">
        <div className="discount_header">
          <div className="container">
          <div className="discount_wrapper">
            <h5 className="discount_info">Product Hunt launch : <span> get a $50 discount until September 13, 2020 <img src={KissIcon} className="kiss_icon" alt="kiss_icon"/></span> </h5>
            <div className="icon_discount">
              <CloseIcon className="icon_close" />
            </div>
          </div>
          </div>
      </div>
      <div className="container">
      <nav className="header_wrapper">
        <ul className="header_menu navigation">
          <li className="header_item logo">
            <Link to="/"><img src={Logo} alt="logo"/></Link>
          </li>
          <li className="header_item">
            <Link to="/">Process</Link>
          </li>
          <li className="header_item">
            <Link to="/">Extensions</Link>
          </li>
          <li className="header_item">
            <Link to="/faqs">Pricing</Link>
          </li>
          <li className="header_item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
        <ul className="header_menu">
          {/* <button className="button_start">Start now</button> */}
          <Button className="button_start" variant="contained" color="primary">
            Start now
          </Button>
        </ul>
      </nav>
      <div className="mobile-menu">
      <input id="burger" type="checkbox" />

        <label className="mob-humburger" htmlFor="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
        <nav>    
          <ul>
              <li><Link to="/"><img src={Logo} alt="logo"/></Link></li>
              <li><Link to="/">Process</Link></li>
              <li><Link to="/">Extensions</Link></li>
              <li><Link to="/faqs">Pricing</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li> 
              <li><Button className="button_start" variant="contained" color="primary">Start now</Button></li>
              <li><Link to="/faqs">Terms of service</Link></li> 
              <li><Link to="/faqs">Privacy policy</Link></li> 
              <div className="mobile-foor">
                  <img src={github} alt="github"/>
                  <img src={instagram} alt="instagram"/>
                  <img src={twitter} alt="twitter"/>
              </div>
              <li><span>© 2020, DEVONDEMAND.CO. All Rights Reserved.</span></li>
          </ul>  
        </nav>
      </div>
      </div>
      
    </header>
  )
}

export default Header;