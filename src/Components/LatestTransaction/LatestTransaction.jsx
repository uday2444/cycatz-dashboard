import React from "react";
import "./latesttransaction.css";
import { userLatestTransaction } from "../Data/DummyData";

function LatestTransaction() {
  return (
    <div className="latest-widget">
      <h3 className="latest-title">Latest Transactions</h3>
      <table className="table-wrapper">
        <tr className="table-row">
          <th className="table-heading">Tracking ID</th>
          <th className="table-heading">Product</th>
          <th className="table-heading">Customer</th>
          <th className="table-heading">Date</th>
          <th className="table-heading">Amount</th>
          <th className="table-heading">Payment Method</th>
          <th className="table-heading">Status</th>
        </tr>

        {userLatestTransaction.map((item, index) => {
          return (
            <tr className="table-row" key={index}>
              <td className="table-trackid">{item.trackid}</td>
              <td className="table-product">{item.product}</td>
              <td className="table-user">
                <img src={item.image} alt="" className="table-userimage" />
                <span className="table-username">{item.name}</span>
              </td>
              <td className="table-date">{item.date}</td>
              <td className="table-amount">{item.amount}</td>
              <td className="table-amount">{item.paymentMethod}</td>
              <td className="table-status">
                <button className={item.statusStyle}>{item.status}</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default LatestTransaction;
