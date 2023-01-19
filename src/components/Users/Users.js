

import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/axiosUsers";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosUsers.getAll().then(value => value.data).then(value => setUsers([...value]))
    })

    return (<div>
        {
            users.map(value => <User name={value.name} id={value.id}/>)
        }

        </div>);
};

export default Users;