import React from 'react';

import css from './Post.module.css'

const Post = ({post}) => {
    const {id, userId, body, title} = post
    return (
        <div className={css.post}>
            <div>id:{id}</div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export {Post};