import { DataGrid } from "@mui/x-data-grid";

import React, {useState} from "react";

const DataTable = ({ rows, columns, loading, sx }) => {

    const [pageSize, setPageSize] = useState(2)

  return <DataGrid 
  rows={rows} 
  columns={columns}
   loading={loading} 
   sx={sx}
   checkboxSelection
   pagination
   pageSize={pageSize}
   onPageSizeChange={(newPageSize)=> setPageSize(newPageSize)}
   rowsPerPageOptions={[2,5,10]}
    />;
};

export default DataTable;
