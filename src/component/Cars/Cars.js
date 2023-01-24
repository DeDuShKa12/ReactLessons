import React, {useEffect, useState} from 'react';
import {Car} from "../Car/Car";
import {carServices} from "../../services";

const Cars = (setCar) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carServices.getAll().then(({data}) => setCars([...data]))
    }, [cars])

    return (
        <div>

            {cars.map(car => <Car key={car.id} car={car} setCar={setCar}/>)}

        </div>
    );
};

export {
    Cars
}