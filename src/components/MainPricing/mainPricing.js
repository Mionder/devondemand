import React from 'react';
import { Link } from 'gatsby';
import "./mainPricing.css";
import checkmark from "./img/checkmark.svg";

const MainPricing = () => {
  return (
   <div className="pricing">
       <div className="container">
           <div className="pricing-wrapper">
              <h4>A simple pricing plan</h4>
              <h5>Fixed fee per page</h5>
              <div className="pricing-section">
                <p className="pricing-section__price">$350</p>
                <ul className="pricing-section__list">
                    <li><img src={checkmark} alt="checkmark"/> <span>Delivery in 3 business days</span></li>
                    <li><img src={checkmark} alt="checkmark"/> <span>No contract</span></li>
                </ul>
                <p  className="pricing-section__desc">If you don’t have any active job posts you’ll still Have across to your career site and talent pool for no costs.</p>
                <p  className="pricing-section__footer"><Link to="/faqs">Frequently Asked Questions</Link> around our pricing.</p>
              </div>
           </div>
       </div>
   </div>
  )
}

export default MainPricing;