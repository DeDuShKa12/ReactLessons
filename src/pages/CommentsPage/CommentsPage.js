import React from 'react';

import {Comments} from "../../components";
import {Outlet} from "react-router-dom";
import css from './CommentPage.module.css'

const CommentsPage = () => {
    return (
        <div className={css.commentPageDiv}>
            <Comments/>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};