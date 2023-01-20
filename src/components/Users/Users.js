

import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/axiosUsers";
import User from "../User/User";

const Users = ({setIdUser}) => {
    const [getId, setGetId] = useState(null);
    getId && setIdUser(getId)

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axiosUsers.getAll().then(value => value.data).then(value => setUsers([...value]))

    },[])

    return (<div>
        <h2>Users</h2>

        {users.map(user => <User key={user.id} user={user} setGetId={setGetId}/>)}

        </div>);
};

export default Users;