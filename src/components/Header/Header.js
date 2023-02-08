import React from 'react';
import {useSelector} from "react-redux";

import css from './header.module.css'


const Header = () => {
    const {selectedUser, getById} = useSelector(state => state.users);

    const {selectPost, getPostById} = useSelector(state => state.posts);

    return (
        <div className={css.mainBox}>
            <div className={css.box1}>    {selectedUser && selectedUser.name}

                {getById && JSON.stringify(getById)}
            </div>
            <hr/>
            <div className={css.box2}>
                {selectPost && selectPost.title}
                {getPostById && getPostById.title}

            </div>
        </div>

    );
};

export {Header};