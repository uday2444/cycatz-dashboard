import React from "react";
import "./newmember.css";
// import img1 from "../../Images/boy-avatar.jpg";
import { Visibility } from "@mui/icons-material";
import { userLatestTransaction } from "../Data/DummyData";

function NewMember() {
  return (
    <div className="widget">
      <span className="widget-title">Newly Joined Members</span>
      <ul className="widget-list">
        {userLatestTransaction.map((item, index) => {
          return (
            <li className="widget-items" key={index}>
              <img
                src={item.image}
                alt={item.alt}
                className="widget-member-pic"
              />
              <div className="widget-user-data">
                <span className="username">{item.name}</span>
                <span className="usertitle">{item.designation}</span>
              </div>
              <button className="widget-btn">
                <Visibility className="btn-icon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewMember;
