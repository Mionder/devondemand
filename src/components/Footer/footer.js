import React from 'react';
import { Link as Linking } from 'gatsby';
import Button from '@material-ui/core/Button';
import Logo from "../Header/img/devondemand.png";
import { Link } from 'react-scroll';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import './footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="services">
        <div className="container">
          <div className="services-wrapper">
            <ul className="services_list">
              <li className="services_list_item">Bring data from any source that are always up-to-date</li>
              <li className="services_list_item">Generate billions contents at the moment of engagement</li>
              <li className="services_list_item">Optimize in real-time your content performance</li>
            </ul>
            <div className="services_info">
              <h2 className="services_title">
                Generate powerful content, reap more than conversion
              </h2>
              <div className="services_subtitle">
                From boring content campaign to unexpected one, there is us. Break your email vision & give your content something your subscribers have never seen before.
              </div>
              <div className="services_button">
                <Link
                  activeClass=""
                  to="wrapper_full_form"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {650}
                  ><Button className="button_start footer_button-start" variant="contained" color="primary">
                  Start now
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_start">
        <div className="container">
          <div className="start-wrapper">
            <div className="start-form">
              <h2 className="start_title">
                Try dev on demand today!
              </h2>
              <div className="start_button">
              <Link
                  activeClass=""
                  to="wrapper_full_form"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration= {700}
                  ><Button className="button_start footer_button-white" variant="contained" color="primary">
                  Start now
                </Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_links">
        <div className="container">
          <div className="links-wrapper">
            <div className="footer_logo">
              <Linking to="/"><img src={Logo} alt="logo"/></Linking>
            </div>
            <div className="footer_docs">
              <Linking to="/terms-of-service" className="footer_docs_item">Terms of service</Linking>
              <Linking to="/privacy-policy" className="footer_docs_item">Privacy policy</Linking>
            </div>
            <div className="footer_social">
              <ul className="social_list">
                <li className="social_list_item"><a href="#"><GitHubIcon /></a></li>
                <li className="social_list_item"><a href="#"><InstagramIcon /></a></li>
                <li className="social_list_item"><a href="#"><TwitterIcon /></a></li>
              </ul>
            </div>
            <div className="footer_copyright">
              © 2020, DEVONDEMAND.CO. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;