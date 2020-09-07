import React, { useState }  from "react";
import "./secondMainForm.css";
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Button from '@material-ui/core/Button';
const SecondMainForm = () => {
    return(
         <div className="development-form second-form">
               <form name="check" method="" action="">
                    <h5>Let’s bring your design to life</h5>
                    <a className="previous-step" href="#">Previous step</a>
                    <div className="development-form__header">
                        <p>Choose the APIs to integrate</p>
                        <p>We charge $200 per connection</p>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <div className="form-check">
                        <div className="form-check__choose">
                            <Checkbox icon={<CircleUnchecked />} checkedIcon={<CircleCheckedFilled />}/>
                            <p>Connect Stripe</p>
                            <span>+2 business days</span>
                        </div>
                        <a href="#">stripe</a>
                    </div>
                    <Button variant="contained">get started</Button>
                </form>
                <div className="development-footer">
                   <a href="#"><span>By clicking on the button, you agree to our Terms of Service and have read and acknowledge our Privacy Policy.</span></a>
                </div>
               </div> 
    )
}

export default SecondMainForm;