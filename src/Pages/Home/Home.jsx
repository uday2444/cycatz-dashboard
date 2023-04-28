import React from "react";
import MyBarChart from "../../Components/Horizontal Bar/HorizontalBar";
import Feature from "../../Components/Features/Feature";

import Sidebar from "../../Components/sidebar/Sidebar";
import Technology from "../../Components/Technology/Technology";

import TopBar from "../../Components/TopBar/topbar";
import "./home.scss";
import MapComponent from "../../Components/MapComponent/MapComponent";
import VerticalBar from "../../Components/VerticalBar/VerticalBar";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <TopBar /> 
        <Feature />
        <Technology />
        <MyBarChart />
        <MapComponent/>
        <VerticalBar/>
      </div>
    </div>
  );
}

export default Home;
