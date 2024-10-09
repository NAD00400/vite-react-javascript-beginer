import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import {  Table } from 'antd';
import {UpdateUserModal} from './update.user.modal';
import { useState } from 'react';


const UserTable = (props) => {
const { dataUsers ,loadUser} = props;
  
const [IsModalUpdateUser, setIsModalUpdateUser] = useState(false);
const [dataUpdate,setDataUpdate]=useState(null);

const columns = [
      {
        render: (_, record) => {
            return(
                <a href='#'>{record._id}</a>
            )
        }
      },
      {
          title: 'Full Name',
          dataIndex: 'fullName',
      },
      {
          title: 'Email',
          dataIndex: 'email',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => {
            return(
                <div style={{display:"Flex", gap:"20px"}}>
                    <a>
                        <EditOutlined
                        onClick={()=>{
                            setDataUpdate(record);
                            setIsModalUpdateUser(true);
                        }}
                        style={{cursor:"pointer",color:"#F24333"}}/></a>
                    <a><DeleteOutlined style={{cursor:"pointer",color:"#5B2333"}}/></a>
                </div>
            )
        }
      },
  ];


  
  return (
    <>
    
        <Table
        columns={columns}
        dataSource={dataUsers}
        rowKey={"_id"}
        />
        <UpdateUserModal
            IsModalUpdateUser={IsModalUpdateUser}
            setIsModalUpdateUser={setIsModalUpdateUser}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            loadUser={loadUser}
        />
    </>
)
}

export { UserTable };

