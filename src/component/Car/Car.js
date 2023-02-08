import React from 'react';

import {useDispatch} from "react-redux";
import {carActions} from "../../redux/slices";

const Car = ({car}) => {
    const {id,brand, year, price} = car

    const dispatch = useDispatch();

    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>dispatch(carActions.setCarForUpdate(car))}>Update</button>
            <button onClick={()=>dispatch(carActions.deleteById({id}))}>DelCar</button>
        </div>
    );
};

export {Car}