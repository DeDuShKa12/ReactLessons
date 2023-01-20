import React, {useEffect, useState} from 'react';
import {axiosUsers} from "../../services/axiosUsers";
import {Post} from "../Post/Post";

const Posts = ({idUser}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axiosUsers.getPosts().then(value => value.data).then(value => setPosts([...value]))

    }, [])
    return (
        <div>
            {posts && posts.map(post =>
                (post.userId === idUser) && <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};
