import React from "react";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import "./topbar.css";
import boyavatar from "../../Images/boy-avatar.jpg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topleft">
          <div className="logo">Uadmin</div>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="notification-count">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="notification-count">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={boyavatar} alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
