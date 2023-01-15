import React from "react";
import * as MaterialIcon from "@material-ui/icons";

export const SideBarData = [
  {
    title: "Dashboard",
    subNav: [
      {
        Icon: <MaterialIcon.LineStyle />,
        title: "Home",
      },
      {
        Icon: <MaterialIcon.Timeline />,
        title: "Analytics",
      },
      {
        Icon: <MaterialIcon.TrendingUp />,
        title: "Sales",
      },
    ],
  },
  {
    title: "Quick Menu",
    subNav: [
      {
        Icon: <MaterialIcon.PermIdentity />,
        title: "Users",
      },
      {
        Icon: <MaterialIcon.Storefront />,
        title: "Products",
      },
      {
        Icon: <MaterialIcon.AttachMoney />,
        title: "Transactions",
      },
      {
        Icon: <MaterialIcon.BarChartSharp />,
        title: "Reports",
      },
    ],
  },
  {
    title: "Notifications",
    subNav: [
      {
        Icon: <MaterialIcon.MailOutlineSharp />,
        title: "Mail",
      },
      {
        Icon: <MaterialIcon.ForumSharp />,
        title: "Feedback",
      },
      {
        Icon: <MaterialIcon.ChatBubbleOutlineSharp />,
        title: "Messages",
      },
    ],
  },
  {
    title: "Staff",
    subNav: [
      {
        Icon: <MaterialIcon.WorkOutline />,
        title: "Manage",
      },
      {
        Icon: <MaterialIcon.Timeline />,
        title: "Analytics",
      },
      {
        Icon: <MaterialIcon.BarChartSharp />,
        title: "Reports",
      },
    ],
  },
];

// export default SideBarData;
