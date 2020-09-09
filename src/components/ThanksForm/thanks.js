import React, { useState }  from "react";
import "./thanks.css";
import Smile from "./img/EmojiGIFs.gif";
import Button from '@material-ui/core/Button';
const ThanksForm = () => {
    const [typeProject, setTypeProject] = useState("");
    const [isExistProject, setExistProject] = useState("");
    return(
        <div className="thanks_form">
                <div className="thanks_form-wrapper">
                    <img className="smile_form" src={Smile} alt="smile_form" width="141px"/>
                    {/* <iframe src="https://assets.pinterest.com/ext/embed.html?id=596164069414851366" height="103" width="103" frameborder="0" scrolling="no" ></iframe> */}
                    <h3 className="thanks_title">Thank you for your order!</h3>
                    <p className="thanks_subtitle">Before to start, we have a few questions</p>
                </div>
                <div className="form_success">
                    <div className="form">
                        <h4 className="title_form_success">Let’s bring your design to life</h4>
                        <label className="label_form" htmlFor="looking_for">You are looking for</label>
                        <div id="looking_for">
                            <button onClick={() => setTypeProject("true")} className={typeProject === "true" ? "looking_for-active" : "form_but"}>normal react app</button>
                            <button onClick={() => setTypeProject("false")} className={typeProject === "false" ? "looking_for-active" : "form_but"}>server side render with gatsby</button>
                        </div>
                        <label className="label_form" htmlFor="type_website">Are you developing?</label>
                        <div id="type_website">
                            <button onClick={() => setExistProject("true")} className={isExistProject === "true" ? "type_website-active" : "form_but"}>A new website</button>
                            <button onClick={() => setExistProject("false")} className={isExistProject === "false" ? "type_website-active" : "form_but"}>Partialy updated website</button>
                        </div>
                        <label className="label_form" htmlFor="api_schema">Link to your API schema (if you have one)</label>
                        <input placeholder="Https://www.myapi.com" type="text" id="api_schema"/>

                        <label className="label_form" htmlFor="comment">Any comment?</label>
                        <input type="text" placeholder="Any comment?" id="comment"/>
                        <Button className={isExistProject !== "" && typeProject !== "" ? "disp" : "dispn"} variant="contained" color="primary">GET STARTED</Button>
                    </div>
                </div>
        </div>
    )
}

export default ThanksForm;