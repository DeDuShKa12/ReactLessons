

import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/axiosUsers";
import User from "../User/User";

const Users = () => {

    const [users, setUsers] = useState([]);
    let {btnEvent, setBtnEvent} = useState(null);

    useEffect(() => {

        axiosUsers.getAll().then(value => value.data).then(value => setUsers([...value]))

    },[])

    return (<div>
        <h2>{btnEvent}</h2>
        <hr/>
        <h2>Users</h2>

        {users.map(user => <User key={user.id} user={user} setBtnEvent={setBtnEvent}/>)}

        </div>);
};

export default Users;