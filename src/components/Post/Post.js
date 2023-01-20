import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div>
            <div>ID: {id}</div>
            <div>UserId: {userId}</div>
            <div>{title}</div>
            <div>{body}</div>

        </div>
    );
};

export {Post};