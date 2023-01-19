import React from "react";
import * as MaterialIcon from "@mui/icons-material";

export const SideBarData = [
  {
    title: "Main",
    subNav: [
      {
        Icon: <MaterialIcon.LineStyle />,
        title: "Dashboard",
        style: "active",
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
        Icon: <MaterialIcon.CreditCard />,
        title: "Orders",
      },
      {
        Icon: <MaterialIcon.LocalShipping />,
        title: "Delivery",
      },
    ],
  },
  {
    title: "Useful",
    subNav: [
      {
        Icon: <MaterialIcon.BarChartSharp />,
        title: "stats",
      },
      {
        Icon: <MaterialIcon.NotificationsNone />,
        title: "Notification",
      },
      {
        Icon: <MaterialIcon.ChatBubbleOutlineSharp />,
        title: "Messages",
      },
    ],
  },
  {
    title: "Manage",
    subNav: [
      {
        Icon: <MaterialIcon.AccountCircle />,
        title: "Profile",
      },
      {
        Icon: <MaterialIcon.ExitToApp />,
        title: "Logout",
      },
    ],
  },
];

// export default SideBarData;
