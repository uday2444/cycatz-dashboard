import React from "react";
import DataTable from "../../Components/DataTable/DataTable";
import Sidebar from "../../Components/sidebar/Sidebar";

import TopBar from "../../Components/TopBar/topbar";
import "./list.scss";

const List = () => {
  return (
    <div className="list-wrapper">
      <Sidebar />
      <div className="list-container">
        <TopBar />
        <DataTable />
      </div>
    </div>
  );
};

export default List;
