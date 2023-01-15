import React from "react";
import * as FeatureIcon from "@material-ui/icons";
import "./feature.css";

function Feature() {
  const featureInfo = [
    {
      id: 1,
      title: "Revenue",
      FeatureMoney: "$3415",
      FeatureMoneyRate: -11.4,
      Icon: <FeatureIcon.ArrowDownward />,
      styleName: "feature-icon-negative",
      subtitle: "Compared to last month",
    },
    {
      id: 2,
      title: "Sales",
      FeatureMoney: "$4,415",
      FeatureMoneyRate: -1.4,
      Icon: <FeatureIcon.ArrowDownward />,
      styleName: "feature-icon-negative",
      subtitle: "Compared to last month",
    },
    {
      id: 3,
      title: "Cost",
      FeatureMoney: "$2,215",
      FeatureMoneyRate: +2.4,
      Icon: <FeatureIcon.ArrowUpward />,
      subtitle: "Compared to last month",
      styleName: "feature-icon-positive",
    },
  ];
  return (
    <div className="feature">
      {featureInfo.map((item, index) => {
        return (
          <div className="feature-item" key={index}>
            <span className="feature-title">{item.title}</span>
            <div className="feature-money-container">
              <span className="feature-money">{item.FeatureMoney}</span>
              <span className="feature-moneyrate">{item.FeatureMoneyRate}</span>
              <span className={item.styleName}>{item.Icon}</span>
            </div>
            <span className="feature-subtitle">{item.subtitle}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Feature;
