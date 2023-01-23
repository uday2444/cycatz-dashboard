import * as React from "react";
// import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Edit, Delete } from "@mui/icons-material";

import { UserColumns, UserRows } from "./Data";
import "./DataTable.scss";

const DataTable = () => {
  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cell-with-action">
            <div className="ViewButton">
              <Edit />
            </div>
            <div className="DeleteButton">
              <Delete />
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datagrid-table">
      <DataGrid
        rows={UserRows}
        columns={UserColumns.concat(action)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
};

export default DataTable;
