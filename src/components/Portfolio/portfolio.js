import React from "react";
import "./portfolio.css";
import Button from '@material-ui/core/Button';
import Work from "../Work/work.js";

const Portfolio = () => {
    return(
        <div className="portfolio">
            <div className="container">
                <div className="portfolio_wrapper_new">
                    <h4 className="portfolio_title">This is our working process.</h4>
                    <p className="portfolio_subtitle">Attract talent with beautiful job posts and manage candidates 
in an easy-to-use and powerful tool.</p>
                    <Button className="button_start" variant="contained" color="primary">
                        Start now
                    </Button>
                </div>
                <div className="work-section">
                    <Work />
                    <Work />
                    <Work />
                    <Work />
                </div>
            </div>
        </div>
    )
}

export default Portfolio;