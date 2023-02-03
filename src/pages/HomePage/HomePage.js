import React from 'react';
import {Input} from "../../components";
import {Cats} from "../../components/Cats/Cats";
import {Dogs} from "../../components/Dogs/Dogs";
import css from './HomePage.module.css'
import {useAppReducer} from "../../Hooks/useAppReducer";

const HomePage = () => {
    const [,dispatch1] = useAppReducer(value=> value.dogReducer);

    const [,dispatch2] = useAppReducer(value=>value.catReducer);

    return (
        <div>
            <Input dispatch1={dispatch1} dispatch2={dispatch2}/>
            <hr/>
            <div className={css.catsDogs}>
                <Cats dispatch2={dispatch2}/>
                <Dogs dispatch1={dispatch1}/>
            </div>

        </div>
    );
};

export {HomePage};