import React from "react";
import "./newmember.css";
import img1 from "../../Images/boy-avatar.jpg";
import { Visibility } from "@mui/icons-material";
import { userLatestTransaction } from "../Data/DummyData";

function NewMember() {
  const MemberData = [
    {
      id: 1,
      name: "Gowrav Bhatt",
      image: img1,
      alt: "Gowrav profile image",
      designation: "Software Engineer",
    },
    {
      id: 2,
      name: "Bharath M H",
      image: img1,
      alt: "Bharath profile image",
      designation: "Software Engineer",
    },
    {
      id: 3,
      name: "Sunil Kumar B",
      image: img1,
      alt: "sunil profile image",
      designation: "Software Engineer",
    },
    {
      id: 4,
      name: "Koushik Raj",
      image: img1,
      alt: "kousik profile image",
      designation: "Software Engineer",
    },
    {
      id: 5,
      name: "Sayanth",
      image: img1,
      alt: "sayanth profile image",
      designation: "Software Engineer",
    },
  ];
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
