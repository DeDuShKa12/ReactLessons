import React, {useEffect} from 'react';
import {Car} from "../Car/Car";

import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";
import {useSearchParams} from "react-router-dom";

const Cars = () => {

    const {cars, prev, next} = useSelector(state => state.cars);

    const [query, setQuery] = useSearchParams({page: '1'});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll({page:query.get('page')}))
    }, [dispatch, query])

    return (
        <div>
            <div>
                <button disabled={!prev} onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button disabled={!next} onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};