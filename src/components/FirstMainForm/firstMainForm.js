import React, { Component }  from "react";
import { Link } from 'gatsby';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { DropzoneArea } from 'material-ui-dropzone';
import "./firstMainForm.css";
import Checkbox from '@material-ui/core/Checkbox';
import CircleCheckedFilled from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Alert from "../Alert/Alert";
import "../TechnologySelect/select.css";
export default class FirstMainForm extends Component{
    state = {
        isFrontOnly: true,
        isShowFirst: "first",
        numberPages: 3,
        buttonColor: true,
        getStarted: "get started",
        continueLabel: "continue",
        emailValue: "",
        fileValue: "",
        throwError: false,
        throwModal: false,
        selectValue: "R",
        isCheckedItem: false,
        formSecondValid: false,
        checkBoxes: [
            {
                id: "1",
                checked: false
            },
            {
                id: "2",
                checked: false
            },
            {
                id: "3",
                checked: false
            },
            {
                id: "4",
                checked: false
            },
            {
                id: "5",
                checked: false
            },
            {
                id: "6",
                checked: false
            },
        ]
    }

    componentDidMount(){
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeNumber = this.handleChangeNumber.bind(this);
        this.handleChangeFile = this.handleChangeFile.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    handleChangeNumber= (event) =>{
        this.setState({numberPages: event.target.value});
        this.validation();
    }
    handleChangeEmail = (event) => {
        this.setState({emailValue: event.target.value});
        this.validation();
    }

    handleChangeFile = (event) => {
        this.setState({fileValue: event.target.value});
        this.validation();
    }

    handleChangeSelect = async(event) => {    
        await this.setState({selectValue: event.target.value});
        switch (this.state.selectValue){
            case "R": await this.setState({isFrontOnly: true}); break;
            case "Ra": await this.setState({isFrontOnly: false}); break;  
            case "RN": await this.setState({isFrontOnly: true}); break;  
            case "RNa": await this.setState({isFrontOnly: false}); break;  
            default: return 0;
        } 
    }


     validation = async() => {
         const {numberPages, emailValue} = this.state;
         let figma = document.getElementById("uploadFile").value;
         if((numberPages !== undefined || "") && (emailValue !== undefined || "")&&(figma !== '' || undefined)){
            if(numberPages !== 0 && emailValue.indexOf('@') !== -1 && emailValue.indexOf('.') !== -1){
                this.sette();
            }
            else this.setState({buttonColor: true});
         }
         else this.setState({buttonColor: true});     
    }

    sette(){
        this.setState({buttonColor: false});
    }

     changeFileValue = () =>{
        document.getElementById("uploadBtn").onchange = function () {
            document.getElementById("uploadFile").value = this.value.replace("C:\\fakepath\\", "");
            document.getElementById("fileUpload").value = this.value.replace("C:\\fakepath\\", "");

        };
        this.validation();
    }

    checkError = async() => {
        if (this.state.buttonColor === true){
           await this.setState({throwError: true});
        }
        else await this.setState({throwError: false});
        if(!this.state.throwError)
            setTimeout(window.location.reload(),1000);
        
    }
    checkSecond = async() =>{
        if (this.state.buttonColor === true){
           await this.setState({throwError: true});
        }
        else await this.setState({throwError: false});
        if(this.state.throwError === false)
            this.setState({isShowFirst: "second"})
    }
    

    setValue = () => {
        this.setState({isFrontOnly: false})

    }

    setCheckboxes = async(_id) => {
        const {checkBoxes} = this.state;
        var key = 0; 
            for(let i=0; i<checkBoxes.length; i++){
                if(checkBoxes[i].id == _id){
                    checkBoxes[i].checked = !checkBoxes[i].checked;
                }
                if(checkBoxes[i].checked === true){
                   await this.setState({isCheckedItem: true})
                }
            }

            for(let i=0; i<checkBoxes.length; i++){
                if(checkBoxes[i].checked == true)
                    key=checkBoxes[i].id;
            }
            if(key == 0){
                await  this.setState({isCheckedItem: false})
            }   
    }

    errorCheck = () => {
        if(this.state.isCheckedItem === true){
            this.setState({formSecondValid: true})
            setTimeout(window.location.reload(),1000);

        }
    }


    render(){
        const {isFrontOnly,isShowFirst,numberPages, buttonColor,getStarted,formSecondValid, continueLabel,isCheckedItem, emailValue, fileValue, throwError, selectValue} = this.state;

    return(
        <div className="wrapper_full_form">
            {isShowFirst === "first" &&
                <div className="development-form first-form">
                <div className="form_dev">
                        <h5>Let’s bring your design to life</h5>
                        <div className="from-section">
                        <span className="from-section__text">You are looking for*</span>
                        <div className="form-tabs">
                            <div className="selecter">
                                <FormControl required >
                                    <Select value={selectValue}
                                    native
                                    onChange={this.handleChangeSelect}
                                    name="age"
                                    inputProps={{
                                        id: 'age-native-required',
                                    }}
                                    >
                                    <option value={"R"}>React Only</option>
                                    <option value={"Ra"}>React + Api</option>
                                    <option value={"RN"}>React Native (Mobily) Only</option>
                                    <option value={"RNa"}>React Native (Mobily) + Api</option>
                                    </Select>
                                </FormControl>
                            </div>                          
                        </div>
                        <div className="form-upload">
                            <span className="from-section__text">Link to your design (you can also drag and drop a file)*</span>
                            <input onDragOver={() => this.setState({isShowFirst: "third"})} name="link" type="text" onChange={this.handleChangeFile} id="fileUpload" value={fileValue} placeholder="https://www.figma.com/yourdesign" />
                           <div className="form-next">
                                <div className="form-upload__helper">
                                    <input  onDragOver={() => this.setState({isShowFirst: "third"})} onChange={this.handleChangeFile}  id="uploadFile" className="f-input" placeholder="https://www.figma.com/yourdesign" />
                                    <div className="fileUpload btn btn--browse">
                                        <svg width="25px" height="25px" viewBox="0 0 16 16" className="bi bi-cloud-arrow-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                                            <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                                        </svg>
                                        <input id="uploadBtn" onClick={this.changeFileValue} type="file" className="upload" />
                                    </div>
                                    
                                </div>
                           </div>
                        </div>
                        <span className="from-section__text">Number of pages*</span>
                        <input name="pages" onChange={this.handleChangeNumber} value={numberPages}  id="pages" type="number" placeholder="3" />
                        <span className="from-section__text">Your e-mail*</span>
                        <input name="email" type="email" onChange={this.handleChangeEmail} value={emailValue} placeholder="name@email.com" />
                        {isFrontOnly ? <Button className={buttonColor ? "dispn" : "disp"}  variant="contained" onClick={this.checkError}>{getStarted}</Button>
                        : <Button onClick={this.checkSecond}  className={buttonColor ? "dispn" : "disp"} variant="contained">{continueLabel}</Button>}
                        {throwError && <Alert className="alert_block" type="error" message="Enter correct info please..." />}
                        {!throwError && !buttonColor && <Alert className="alert_block" type="success" message="sending..." />}
                        {/* <Button onClick={() => setShowFirst("second")} variant="contained">{isFrontOnly ? getStarted : <span>{continueLabel}</span>}</Button> */}
                        </div>
                    </div>
                    <div className="development-footer">
                    <span>By clicking on the button, you agree to our <Link to="/privacy-policy">Terms of Service and have read and acknowledge our Privacy Policy.</Link></span>
                    </div>
               </div>
            }
            {
                isShowFirst === "second" &&
                <div className="development-form second-form">                    
                <form name="check" method="" action="">
                <div className="form_dev">
                     <h5>Let’s bring your design to life</h5>
                     <a onClick={() => this.setState({isShowFirst: "first"})} className="previous-step">Previous step</a>
                     <div className="development-form__header">
                         <p>Choose the APIs to integrate</p>
                         <p>We charge $200 per connection</p>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(1)} checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(2)} checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(3)} checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(4)}  checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(5)} checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <div className="form-check">
                         <div className="form-check__choose">
                             <Checkbox icon={<CircleUnchecked />} onClick={()=>this.setCheckboxes(6)} checkedIcon={<CircleCheckedFilled />}/>
                             <p>Connect Stripe</p>
                             <span>+2 business days</span>
                         </div>
                         <a href="#">stripe</a>
                     </div>
                     <Button onClick={this.errorCheck} className={!isCheckedItem ? "dispn" : "disp"} variant="contained">get started</Button>
                     {formSecondValid && <Alert className="alert_block" type="success" message="sending..." />}

                     </div>
                 </form>
                 <div className="development-footer">
                 <Link to="/privacy-policy">By clicking on the button, you agree to our <span>Terms of Service and have read and acknowledge our Privacy Policy.</span></Link>
                 </div>
                </div> 
            }
            { isShowFirst === "third" &&
                    <div className="development-form third-form">
                        <form name="drop" method="" action="">
                            <div className="third_form-info">
                                <h5>Upload your files</h5>
                                <div className="icon_discount" onClick={() => this.setState({isShowFirst: "first"})}>
                                    <CloseIcon className="icon_close" />
                                </div>
                            </div>
                            <DropzoneArea acceptedFiles={['image/*']} dropzoneText={"Drag & Drop your files here"} onChange={(files) => console.log('Files:', files)}/>
                        </form>
                        <div className="development-footer">
                        <Link to="/privacy-policy">By clicking on the button, you agree to our <span>Terms of Service and have read and acknowledge our Privacy Policy.</span></Link>
                        </div>
                    </div> 

            }

            
            </div>
    )
}
}