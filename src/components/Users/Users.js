import React, {useEffect} from 'react';
import {userService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {userAction} from "../../redux";
import {User} from "../User/User";

const Users = () => {

    const dispatch = useDispatch();

    const {usersList} = useSelector(state => state.users);


    useEffect(() => {
       dispatch(userAction.getAll())
    }, [])

    return (

        <div>
            {usersList.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};