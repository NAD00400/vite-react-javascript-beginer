import { AuditOutlined, HomeOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    //anchor
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/user"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/book"}>Books</Link>,
            key: 'books',
            icon: <AuditOutlined />,

        },
      ];
    return(
        <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
    />
    )
}
export { Header };

