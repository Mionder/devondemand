import React, { useState }  from "react";
import "./thanks.css";
import Smile from "./img/smile.png";
import Button from '@material-ui/core/Button';
const ThanksForm = () => {
    const [typeProject, setTypeProject] = useState(true);
    const [isExistProject, setExistProject] = useState(true);
    return(
        <div className="thanks_form">
                <div className="thanks_form-wrapper">
                    <img className="smile_form" src={Smile} alt="smile_form"/>
                    <h3 className="thanks_title">Thank you for your order!</h3>
                    <p className="thanks_subtitle">Before to start, we have a few questions</p>
                </div>
                <div className="form_success">
                    <div className="form">
                        <label className="label_form" htmlFor="looking_for">You are looking for</label>
                        <div id="looking_for">
                            <button onClick={() => setTypeProject(true)} className={typeProject ? "looking_for-active" : "form_but"}>normal react app</button>
                            <button onClick={() => setTypeProject(false)} className={!typeProject ? "looking_for-active" : "form_but"}>server side render with gatsby</button>
                        </div>
                        <label className="label_form" htmlFor="type_website">Are you developing?</label>
                        <div id="type_website">
                            <button onClick={() => setExistProject(true)} className={isExistProject ? "type_website-active" : "form_but"}>A new website</button>
                            <button onClick={() => setExistProject(false)} className={!isExistProject ? "type_website-active" : "form_but"}>Partialy updated website</button>
                        </div>
                        <label className="label_form" htmlFor="api_schema">Link to your API schema (if you have one)</label>
                        <input placeholder="Https://www.myapi.com" type="text" id="api_schema"/>

                        <label className="label_form" htmlFor="comment">Any comment?</label>
                        <input type="text" placeholder="Any comment?" id="comment"/>
                        <Button className="button_form" variant="contained" color="primary">GET STARTED</Button>
                    </div>
                </div>
        </div>
    )
}

export default ThanksForm;