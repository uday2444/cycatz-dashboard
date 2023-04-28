import React from "react";
import { HeadsetMic, Diamond } from '@mui/icons-material';


import "./topbar.scss";
import profilePic from "../../Images/profile-img.png";
import flipcartLogo from '../../Images/flipcart-logo.png'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="flipcart-content">
          <img src={flipcartLogo} className="Premium-logo" alt="flicart-logo" />
          <p className="flipcart-title">FLipKart</p>
        </div>
        <div className="topright">
         
        <div className="premium-content">
          <Diamond className="premium-icon" alt="premium-icon" />
          <p className="premium-title">Premium</p>
          </div>
          <div className="help-content">
          <HeadsetMic className="help-icon" alt="help-icon"/>
          <p className="help-title">Help Desk</p>
            </div>
            
          
          <img src={profilePic} alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
