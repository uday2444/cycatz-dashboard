import React from "react";
import { SideBarData } from "./SideBarMenuData";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          {SideBarData.map((item, index) => {
            return (
              <>
                <h3 className="sidebar-title" key={index}>
                  {item.title}
                </h3>
                <ul className="sidebar-list">
                  {item.subNav.map((i, ind) => {
                    return (
                      <li className="sidebar-items" key={ind}>
                        <span className="sidebar-icon">{i.Icon}</span>
                        {i.title}
                      </li>
                    );
                  })}
                </ul>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
