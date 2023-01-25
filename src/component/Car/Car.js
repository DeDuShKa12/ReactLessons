import React from 'react';
import {carServices} from "../../services";

const Car = ({car, setCar}) => {
    const {id,brand, year, price} = car
    const deleteCar = async (carId) => {
        await carServices.deleteById(carId)
    }
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>setCar(car)}>Update</button>
            <button onClick={()=>deleteCar(id)}>Delate</button>
        </div>
    );
};

export {Car}