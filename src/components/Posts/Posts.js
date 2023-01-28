import React, {useEffect, useState} from 'react';

import {postsService} from "../../services";
import {Post} from "../Post/Post";
import css from './Posts.module.css'

const Posts = ({postId}) => {

    const [post, setPost] = useState(null);
    useEffect(()=> {
        postsService.getById(postId).then(({data})=>setPost(data))
    }, [postId])

    return (
        <div className={css.comments}>
            {post && <Post post={post}/>}

        </div>
    );
};

export {Posts};