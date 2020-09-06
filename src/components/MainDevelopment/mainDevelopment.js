import React from 'react';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Collapse from '@material-ui/core/Collapse';
import "./mainDevelopment.css";
import listIcon from "./img/main-list.svg";
import FirstMainForm from "../FirstMainForm/firstMainForm.js";


const MainDevelopment = () => {
  const [open, setOpen] = React.useState(true);
  return (
   <div className="development">
       <div className="container">
           <div className="development-wrapper">
               <div className="development-info">
                   <h2>Front end development on demand</h2>
                   <p>Attract talent with beautiful job posts and manage candidates in an easy-to-use and powerful tool.</p>
                    <ul>
                        <li>
                            <img src={listIcon} alt="list"/>
                            <span>Delivery in 3 business days</span>
                        </li>
                        <li>
                            <img src={listIcon} alt="list"/>
                            <span>No contract</span>
                        </li>
                    </ul>
                    <Collapse in={open}>
                        <Alert action={
                            <IconButton aria-label="close" color="inherit" size="small" onClick={() => {
                                    setOpen(false);
                                }}>
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                            }>
                        By using this website, you agree to our <a href="#">cookie policy</a>
                        </Alert>
                    </Collapse>
               </div>
               <FirstMainForm />
           </div>
       </div>
   </div>
  )
}

export default MainDevelopment;