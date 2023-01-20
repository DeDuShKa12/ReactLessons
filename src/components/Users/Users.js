import React, {useEffect, useState} from 'react';

import {axiosUsers} from "../../services/axiosUsers";
import {User} from "../User/User";

const Users = ({setIdUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        axiosUsers.getAll().then(value => value.data).then(value => setUsers([...value]))

    },[])

    return (<div>
        <h2>Users</h2>

        {users && users.map(user => <User key={user.id} user={user} setIdUser={setIdUser}/>)}

        </div>);
};

export {Users};