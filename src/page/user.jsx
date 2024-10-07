import { useEffect, useState } from 'react';
import { UserForm } from "../Components/user/user.form.jsx";
import { UserTable } from "../Components/user/user.table";
import { fetchAllUserAPI } from '../servcies/api.service.js';

const UserPage = () => {

    const [dataUsers, setDataUsers] = useState([]);
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setDataUsers(res.data)
    }


    // lift-up state 
    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export {UserPage};
