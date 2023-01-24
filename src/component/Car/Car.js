import React from 'react';

const Car = ({car, setCar}) => {
    const {id,brand, year, price} = car
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Year: {year}</div>
            <div>Price: {price}</div>
            <button onClick={()=>setCar(car)}>Update</button>
            <button onClick={()=>setCar(car)}>Delate</button>
        </div>
    );
};

export {Car}