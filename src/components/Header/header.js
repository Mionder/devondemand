import React, { useState } from 'react';
import { Link as Linking } from 'gatsby';
import { Link } from 'react-scroll'
import "./header.css";
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import KissIcon from "./img/kiss.png";
import Logo from "./img/devondemand.png";
import github from "./img/github.svg";
import instagram from "./img/instagram.svg";
import twitter from "./img/twitter.svg";

const Header = () => {
  const [isShowBanner, setShowBanner] = useState(true);

  // const container = document.querySelector(".mob-humburger");

  // container.onclick = function(){
  //   container.classList.toggle("open");
  return (
    <header className="header">
      {
        isShowBanner &&
        <div className="discount_header">
          <div className="container">
          <div className="discount_wrapper">
            <h5 className="discount_info">Product Hunt launch : <span> get a $50 discount until September 13, 2020 <img src={KissIcon} className="kiss_icon" alt="kiss_icon"/></span> </h5>
            <div className="icon_discount" onClick={() => setShowBanner(false)}>
              <CloseIcon className="icon_close" />
            </div>
          </div>
          </div>
        </div>
      }      
      <div className="container">
      <nav className="header_wrapper">
        <ul className="header_menu navigation">
          <li className="header_item logo">
            <Linking to="/"><img src={Logo} alt="logo"/></Linking>
          </li>
          <li className="header_item">
          <Link
              activeClass=""
              to="process-wrapper"
              spy={true}
              smooth={true}
              offset={-70}
              duration= {500}
          >
              Process</Link>
          </li>
          <li className="header_item">
          <Link
            activeClass=""
            to="share-wrapper"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
              >Extensions</Link>
          </li>
          <li className="header_item">
          <Link
            activeClass=""
            to="pricing-wrapper"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >Pricing</Link>
          </li>
          <li className="header_item">
            <Linking to="/portfolio">Portfolio</Linking>
          </li>
        </ul>
        <ul className="header_menu">
          {/* <button className="button_start">Start now</button> */}
          <Link
            activeClass=""
            to="wrapper_full_form"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            ><Button className="button_start" variant="contained" color="primary">
            Start now
          </Button></Link>
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
              <li><Linking to="/"><img src={Logo} alt="logo"/></Linking></li>
              <li><Link
                activeClass=""
                to="process-wrapper"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {500}
            >
                Process</Link></li>
              <li><Link
            activeClass=""
            to="share-wrapper"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
              >Extensions</Link></li>
              <li>          <Link
            activeClass=""
            to="pricing-wrapper"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {500}
            >Pricing</Link></li>
              <li><Linking to="/portfolio">Portfolio</Linking></li> 
              <li><Button className="button_start" variant="contained" color="primary">Start now</Button></li>
              <li><Linking to="/terms-of-service">Terms of service</Linking></li> 
              <li><Linking to="/privacy-policy">Privacy policy</Linking></li> 
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