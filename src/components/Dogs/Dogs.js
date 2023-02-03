import React from 'react';
import {Dog} from "../Dog/Dog";
import {useAppReducer} from "../../Hooks/useAppReducer";

const Dogs = ({dispatch1}) => {
    const [dogs] = useAppReducer((reducers)=>reducers.dogReducer);

    return (
        <div>
            <div>Dogs</div>
            <hr/>
            <div>
                {dogs.map(dog=> <Dog key={dog.id} dog={dog} dispatch={dispatch1}/>)}
            </div>
        </div>
);
};

export {Dogs};