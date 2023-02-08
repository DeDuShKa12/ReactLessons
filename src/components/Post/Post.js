import React from 'react';
import {useDispatch} from "react-redux";
import {postActions} from "../../redux";

const Post = ({post}) => {
    const {id, userId, title, body} = post
    const dispatch = useDispatch();
    return (
        <div>
            <div>userId:{userId}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(postActions.getPostById(post))}>select</button>
            <button onClick={()=>dispatch(postActions.selectPost(post))}>select</button>
        </div>
    );
};

export {Post};