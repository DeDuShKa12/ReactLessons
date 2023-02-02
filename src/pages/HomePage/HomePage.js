import React from 'react';
import {Input} from "../../components";
import {Cats} from "../../components/Cats/Cats";
import {Dogs} from "../../components/Dogs/Dogs";
import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div>
            <Input/>
            <hr/>
            <div className={css.catsDogs}>
                <Cats/>
                <Dogs/>
            </div>

        </div>
    );
};

export {HomePage};