import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";


const userTableStyles = {
    height: '650px'
}


const UserTable = ({ loading, onError }) => {
  const [users, setUsers] = useState([]);

  const columns = [
    { field: "id", headerName: "User ID", width: 150 },
    { field: "name", headerName: "name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch(()=> onError())
  }, [onError]);

  return <DataTable
   rows={users} 
   columns={columns} 
   loading={!users.length} 
   sx={userTableStyles}
   />;
};

export default UserTable;
