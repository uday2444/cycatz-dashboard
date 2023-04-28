import React, {useState} from "react";
import MaterialIcon from "@material-ui/core/Icon";
import { ExpandLess as ExpandLessIcon, ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { SideBarData } from "./SideBarMenuData";
import "./sidebar.scss";
import logo from "../../Images/cycatz.png"


function Sidebar() {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src={logo} alt="cycatz-logo" />
        </div>
      </div>
      <div className="sidebar-menu-center">
        {SideBarData.map((item, index) => (
          <React.Fragment key={index}>
            {item.subNav ? (
              <div className="sidebar-dropdown-button" onClick={() => handleSubMenuClick(index)}>
                <span className="sidebar-icon">{item.Icon}</span>
                <span className="sidebar-title">{item.title}</span>
                <MaterialIcon
    className="sidebar-dropdown-icon"
    sx={{ fontSize: "1.5rem" }}
    color={openSubMenu === index ? "primary" : "inherit"}
  >
    {openSubMenu === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
  </MaterialIcon>
              </div>
            ) : (
              <div className="sidebar-menu-item">
                <span className="sidebar-icon">{item.Icon}</span>
                <span className="sidebar-title">{item.title}</span>
              </div>
            )}
            {item.title === "Vendor Risk Posture" && openSubMenu === index && item.subNav && (
              <ul className={`sidebar-submenu ${openSubMenu === index ? 'open' : ''}`}>
                {item.subNav.map((subItem, subIndex) => (
                  <li key={subIndex} className="sidebar-submenu-item">
                    <span className="sidebar-submenu-icon">{subItem.Icon}</span>
                    <span className="sidebar-submenu-title">{subItem.title}</span>
                  </li>
                ))}
              </ul>
            )}
            {item.title !== "Vendor Risk Posture" && openSubMenu === index && item.subNav && (
              <ul className="sidebar-submenu">
                {item.subNav.map((subItem, subIndex) => (
                  <li key={subIndex} className="sidebar-submenu-item">
                    <span className="sidebar-submenu-icon">{subItem.Icon}</span>
                    <span className="sidebar-submenu-title">{subItem.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        ))}
        
      </div>
    </div>
  );
}

export default Sidebar;
