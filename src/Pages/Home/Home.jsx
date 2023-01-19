import React from "react";
import Chart from "../../Components/Charts/Chart";
import Feature from "../../Components/Features/Feature";
import { UserAnalyticData } from "../../Components/Data/DummyData";
// import NewMember from "../../Components/NewMembers/NewMember";
import LatestTransaction from "../../Components/LatestTransaction/LatestTransaction";
import Sidebar from "../../Components/sidebar/Sidebar";
import "./home.scss";
import TopBar from "../../Components/TopBar/topbar";

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <TopBar />
        <div className="feature-widgets">
          <Feature type="user" />
          <Feature type="order" />
          <Feature type="earning" />
          <Feature type="balance" />
        </div>

        <Chart
          data={UserAnalyticData}
          title="User Analytics"
          grid
          datakey="Month Total"
        />

        <div className="home-widgets">
          {/* <NewMember /> */}
          <LatestTransaction />
        </div>
      </div>
    </div>
  );
}

export default Home;
