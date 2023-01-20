import React, {useEffect, useState} from 'react';

import {axiosUsers} from "../../services/axiosUsers";
import {Post} from "../Post/Post";

const Posts = ({idUser}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosUsers.getPosts(idUser).then(value => value.data).then(value => setPosts([...value]))

    }, [idUser])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
