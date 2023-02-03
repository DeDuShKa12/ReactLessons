import React, {useRef} from 'react';
import {dogActions} from "../../reducers/dogReducer";
import {catActions} from "../../reducers/catReducer";

const Input = ({dispatch1,dispatch2}) => {
    const ref = useRef();


    const saveDog = () => {
        dispatch1(dogActions.ADD(ref.current.value))
    }

    const saveCat = () => {
        dispatch2(catActions.ADD(ref.current.value))

    }

    return (
        <div>
            <input type={'text'} placeholder={'catname'} ref={ref}/>
            <button onClick={()=>saveCat()}>Save</button>
            <input type={'text'} placeholder={'dogname'} ref={ref}/>
            <button onClick={()=>saveDog()}>Save</button>
        </div>
    );
};

export {Input};