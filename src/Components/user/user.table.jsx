import { Table } from "antd";
import {FecthAllUserAPI} from "../../servcies/api.servcies";
import { useState } from "react";
const UserTable  =()=>{
  const [dataUsers, setDataUsers] = useState([
    { _id: "eric", fullName: 25, email: "hn" },
    { _id: "hoidanit", fullName: 25, email: "hcm" }
]);
    const columns = [
        {
          title:'_Id',
          dataIndex:'_id',
        },
        {
          title: "Full Name",
          dataIndex:'fullName'
        },
        {
          title :"Email",
          dataIndex:'email'
        },
      ];
      const loadUser =async()=>{
        const res =await FecthAllUserAPI()
      }
      loadUser()
      console.log(">>>> check render");
       
    return(
     
      <>
        <Table  columns={columns} dataSource={dataUsers} />
      </>
    )
}
export { UserTable };
