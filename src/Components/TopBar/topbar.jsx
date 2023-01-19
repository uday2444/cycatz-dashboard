import React from "react";
import {
  NotificationsNone,
  Language,
  Settings,
  SearchOutlined,
  ModeNightOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import "./topbar.scss";
import boyavatar from "../../Images/boy-avatar.jpg";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined className="top-icon" />
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone className="top-icon" />
            <span className="notification-count">2</span>
          </div>
          <div className="topbarIconContainer">
            <ChatBubbleOutlineOutlined className="top-icon" />
            <span className="notification-count">2</span>
          </div>
          <div className="topbarIconContainer ">
            <Language className="top-icon" />
          </div>
          <div className="topbarIconContainer">
            <Settings className="top-icon" />
          </div>
          {/* <div className="topbarIconContainer">
            <ModeNightOutlined className="top-icon" />
          </div> */}
          <img src={boyavatar} alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
