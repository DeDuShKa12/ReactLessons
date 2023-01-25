import React, {useEffect} from 'react';
import {Car} from "../Car/Car";
import {carServices} from "../../services";

const Cars = ({cars, setCars, setCar}) => {

    useEffect(() => {
        carServices.getAll().then(({data}) => setCars([...data]))
    },[setCars])

    return (
        <div>

            {cars.map(car=><Car key={car.id} car={car} setCar={setCar}/>)}

        </div>
    );
};

export {
    Cars
}