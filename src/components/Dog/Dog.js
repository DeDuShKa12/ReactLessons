import React from 'react';
import {dogActions} from "../../reducers/dogReducer";


const Dog = ({dog, dispatch1}) => {
    const {id, name} = dog

    const deleteDog = (id) => {
        dispatch1(dogActions.DELETE_BY_ID(id))
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>deleteDog(id)}>Del</button>
        </div>
    );
};

export {Dog};