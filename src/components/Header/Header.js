import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";

const Header = () => {
    const {user, logOut} = useAuthContext();
    return (
        <div className={css.Header}>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'todos'}>Todos</NavLink>
            <NavLink to={'albums'}>Albums</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>

            {user && <div>
                <div>{user}</div>
                <button onClick={() => logOut()}>LogOut</button>
                </div>}
        </div>
    );
};

export {Header};