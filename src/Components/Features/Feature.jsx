import React from "react";
import * as FeatureIcon from "@mui/icons-material";
import "./feature.scss";

function Feature({ type }) {
  let data;

  const amount = 100;
  const diff = 20;
  switch (type) {
    case "user":
      data = {
        id: 1,
        title: "USERS",
        isMoney: false,
        Icon: <FeatureIcon.PersonOutlineOutlined className="person icon" />,
        link: "See all users",
      };
      break;
    case "order":
      data = {
        id: 2,
        title: "ORDERS",
        isMoney: false,
        Icon: (
          <FeatureIcon.ShoppingCartOutlined className="shoppingcart icon" />
        ),
        link: "view all orders",
      };
      break;
    case "earning":
      data = {
        id: 3,
        title: "EARNINGS",
        isMoney: true,
        Icon: <FeatureIcon.MonetizationOnOutlined className="earning icon" />,
        link: "view net earning",
      };
      break;
    case "balance":
      data = {
        id: 4,
        title: "BALANCE",
        isMoney: true,
        Icon: (
          <FeatureIcon.AccountBalanceWalletOutlined className="balance icon" />
        ),
        link: "see details",
      };
      break;
    default:
      break;
  }
  return (
    <div className="feature">
      <div className="feature-item-left">
        <span className="feature-title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="feature-item-right">
        <div className="percentage ">
          <FeatureIcon.KeyboardArrowUpOutlined className="icon" />
          <span className="positive">{diff}%</span>
        </div>
        {data.Icon}
      </div>
    </div>
  );
}

export default Feature;
