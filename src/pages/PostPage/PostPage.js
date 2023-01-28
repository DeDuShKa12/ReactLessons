import React from 'react';

import {Posts} from "../../components";
import {useParams} from "react-router-dom";
import css from './PostPage.module.css'

const PostPage = () => {

    const {postId} = useParams();

    return (
        <div className={css.postpage}>
            <Posts postId={postId}/>
        </div>
    );
};

export {PostPage};