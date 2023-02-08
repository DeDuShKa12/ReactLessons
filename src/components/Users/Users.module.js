import React, {useEffect} from 'react';

import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux";
import {User} from "../User/User";
import css from './style.css'

const UsersModule = () => {

    const dispatch = useDispatch();

    const {users, errors, loading} = useSelector(state => state.users);

    useEffect(() => {
       dispatch(userAction.getAll())
    }, [])

    return (

        <div className={css.users}>
            {loading && 'loading'}
            {errors && 'error'}
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {UsersModule};