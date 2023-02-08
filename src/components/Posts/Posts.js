import React, {useEffect} from 'react';
import css from './posts.module.css'
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();

    const {posts, error, loading} = useSelector(state => state.posts);

    console.log(posts);

    useEffect(()=>{
        dispatch(postActions.getAll())
    }, [])

    return (
        <div className={css.posts}>
            {loading && <h2>Loading.....</h2>}
            {error&& JSON.stringify(error)}
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};