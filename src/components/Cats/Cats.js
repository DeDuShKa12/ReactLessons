import React from 'react';
import {Cat} from "../Cat/Cat";
import {useAppReducer} from "../../Hooks/useAppReducer";

const Cats = () => {
    const [cats] = useAppReducer((reducers)=>reducers.catReducer);

    return (
        <div>
            <div>Cats</div>
            <hr/>
            <div>
                {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
            </div>
        </div>
    );
};

export {Cats};