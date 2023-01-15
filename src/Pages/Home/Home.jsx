import React from "react";
import Chart from "../../Components/Charts/Chart";
import Feature from "../../Components/Features/Feature";
import { UserAnalyticData } from "../../Components/Data/UserAnalyticsData";
import "./home.css";
import NewMember from "../../Components/NewMembers/NewMember";
import LatestTransaction from "../../Components/LatestTransaction/LatestTransaction";

function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart
        data={UserAnalyticData}
        title="User Analytics"
        grid
        datakey="Active User"
      />
      <div className="home-widgets">
        <NewMember />
        <LatestTransaction />
      </div>
    </div>
  );
}

export default Home;
