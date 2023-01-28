import React, {useEffect, useState} from 'react';

import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";


const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(({data})=>setComments([data]))
    }, [])

    console.log(comments);

    return (
        <div>
            {comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};