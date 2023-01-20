import React from 'react';

const Post = ({post}) => {
    const {userId, title, body} = post
    return (
        <div>
            <div>UserId: {userId}</div>
            <div>{title}</div>
            <div>{body}</div>

        </div>
    );
};

export {Post};