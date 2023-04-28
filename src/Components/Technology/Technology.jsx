import React from "react";
import { Chart } from "react-google-charts";
import './technology.scss'






const Technology = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Project 1 - 1000", 1],
        ["Project 2 - 500", 2],
        ["Project 3 - 1000", 3],
        ["Project 4 - 1000", 4],
        ["Project 5 - 500", 5],  
      ];
  return (
    <div className="technology-wrapper">
      <div className="technology-container">
        <div className="card card1">
          <h1>2</h1>
          <p className="card-para">GCP</p>
        </div>
        <div className="card card2">
          <h1>6</h1>
          <p className="card-para">AWS</p>
        </div>
        <div className="card card3">
          <h1>6</h1>
          <p className="card-para">Azure</p>
        </div>
      </div>
      <div className="charts">
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      
    />
    </div>
    </div>
       
    
   
  );
};

export default Technology;
