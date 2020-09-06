import React from "react";
import "./work.css";
import DoneIcon from '@material-ui/icons/Done';
import "../Portfolio/portfolio.css";
import Button from '@material-ui/core/Button';
const Work = () => {
    return(
        <div className="work">
            <div className="container">
                <div className="portfolio_wrapper">
                        <h4 className="portfolio_title">This is our working process.</h4>
                        <p className="portfolio_subtitle">Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                        <Button className="button_start" variant="contained" color="primary">
                            Start now
                        </Button>
                    </div>
                <div className="work_wrapper">
                    <div className="work_area">
                        <button className="button_work">speak2leads</button>
                    </div>
                    <div className="speed_test">
                        <DoneIcon className="done_icon work_done" />
                        <p className="speed_info">97/100 Speed Test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;