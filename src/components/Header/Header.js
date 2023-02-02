import React, {Component} from 'react';

import {NavLink} from "react-router-dom";



class Header extends Component {
    render() {
        return <div>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'comments'}>Comments</NavLink>
        </div>;
    }
}

export {Header};