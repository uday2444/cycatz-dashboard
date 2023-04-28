import React from "react";
import "./feature.scss";

function Feature() {
  const data = [
    {
      id: 1,
      title: "Services",
      count: 6,
      bgcolor: "green",
    },
    {
      id: 2,
      title: "Compliance issue",
      count: 50,
      subCount: [24, 25, 67],
      bgcolor: "green",
    },
    {
      id: 3,
      title: "Vulnerable Resources",
      count: 500,
      subCount: [25, 100, 10],
      bgcolor: "blue",
    },
    {
      id: 4,
      title: "Resolved Issues",
      count: 230,
      subCount: [10, 12, 20],
      bgcolor: "yellow",
    },
    {
      id: 5,
      title: "Resolved Issues",
      count: 230,
      subCount: [10, 12, 20],
      bgcolor: "blue",
    },
  ];

  return (
    <div className="feature">
      {data.map((item) => (
        <div key={item.id} className={`feature-card ${item.bgcolor}`}>
          <h3>{item.title}</h3>
          <div className="count-wrapper">
            <p className="count">{item.count}</p>
            {item.subCount && item.subCount.length > 0 && (
              <div className="subcount-wrapper">
                {item.subCount.map((sub) => (
                  <p className="subcount" key={sub}>{sub}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feature;