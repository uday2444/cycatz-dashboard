import React from 'react'
import { Chart } from "react-google-charts";
import './map.scss'

function MapComponent() {
    const Chartdata = [
        ["Task", "Hours per Day"],
        ["Project 1 - 1000", 1],
        ["Project 2 - 500", 2],
        ["Project 3 - 1000", 3],
        ["Project 4 - 1000", 4],
        ["Project 5 - 500", 5], 
    ];
    const Mapdata = [
        ["Country", "Popularity"],
        ["Germany", 200],
        ["United States", 300],
        ["Brazil", 400],
        ["Canada", 500],
        ["France", 600],
        ["RU", 700],
      ];
  return (
      <div className="mapcomponent-wrapper"> 
           <div className="map-chart">
      <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={Chartdata}
      
    />
          </div>
          <div className="map">
          <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = Mapdata[selection[0].row + 1];
            console.log("Selected : " + region);
              },
              
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
                  data={Mapdata}
                  options={{
             
                    legend: 'none',
                  }}
                  legendToggle
    />
          </div>
    </div>
  )
}

export default MapComponent