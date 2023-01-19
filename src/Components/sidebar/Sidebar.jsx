import React from "react";
import { SideBarData } from "./SideBarMenuData";
import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">U-Cart</div>
      </div>
      <hr />
      <div className="sidebar-menu-center">
        {SideBarData.map((item, index) => {
          return (
            <>
              <h3 className="sidebar-title" key={index}>
                {item.title}
              </h3>
              <ul className="sidebar-list">
                {item.subNav.map((i, ind) => {
                  return (
                    <li className={`sidebar-items ${i.style}`} key={ind}>
                      <span className="sidebar-icon">{i.Icon}</span>
                      {i.title}
                    </li>
                  );
                })}
              </ul>
            </>
          );
        })}
        <h3 className="sidebar-title">Theme</h3>
        <div className="sidebar-theme-bottom">
          <div className="colorOption"></div>
          <div className="colorOption"></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
