import React from "react";
import * as MaterialIcon from "@mui/icons-material";



export const SideBarData = [
  {
    Icon: <MaterialIcon.LineStyle />,
    title: "Dashboard",
    style: "active",
  },

  {
    Icon: <MaterialIcon.NotificationsActive />,
    title: "Vulnerabilites",
  },
  {
    Icon: <MaterialIcon.LockOpenSharp />,
    title: "Attack surface",
  },
  {
    Icon: <MaterialIcon.WebSharp />,
    title: "Darkweb",
  },
  {
    Icon: <MaterialIcon.PublicSharp />,
    title: "Surfaceweb",
  },

  {
    Icon: <MaterialIcon.BarChartSharp />,
    title: "Brand Monitoring",
  },
  {
    Icon: <MaterialIcon.BarChartSharp />,
    title: "Thread Feed",
  },
  {
    Icon: <MaterialIcon.StayCurrentPortraitSharp />,
    title: "Mobile",
  },

  {
    Icon: <MaterialIcon.LocalPostOfficeSharp />,
    title: "Email Security",
  },
  {
    Icon: <MaterialIcon.SummarizeSharp />,
    title: "Incident / Report",
  },
  {
    Icon: <MaterialIcon.BarChartSharp />,
    title: "CSPM",
  },
  {
    Icon: <MaterialIcon.BarChartSharp />,
    title: "Vendor Risk Posture",
    subNav: [
      {
        Icon: <MaterialIcon.LineStyle />,
        title: "Dashboard",
        style: "active",
      },
      {
        Icon: <MaterialIcon.NotificationsActive />,
        title: "Attack Surface Management",
      },
      {
        Icon: <MaterialIcon.WebSharp />,
        title: "Darkweb",
      },
      {
        Icon: <MaterialIcon.PublicSharp />,
        title: "Surfaceweb",
      },
      {
        Icon: <MaterialIcon.BarChartSharp />,
        title: "Brand Monitoring",
      },
      {
        Icon: <MaterialIcon.BarChartSharp />,
        title: "Thread News",
      },
    ],
  },
  {
    Icon: <MaterialIcon.IntegrationInstructionsSharp />,
    title: "Integration",
  },
  {
    Icon: <MaterialIcon.SettingsSharp />,
    title: "Settings",
  },
];

// export default SideBarData;
