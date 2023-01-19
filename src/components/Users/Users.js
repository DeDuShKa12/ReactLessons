

import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/axiosUsers";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axiosUsers.getAll().then(value => value.data).then(value => setUsers([...value]))

    },[])

    return (<div>

        {users.map(user => <User key={user.id} user={user}/>)}

        </div>);
};

export default Users;