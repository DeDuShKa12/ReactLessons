import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/Validators";


import {useDispatch, useSelector} from "react-redux";
import {carActions} from "../../redux/slices";

const CarForm = () => {

    const {carForUpdate} = useSelector(state => state.cars);

    const dispatch = useDispatch();

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });


    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    }, [carForUpdate])

    console.log(carForUpdate);


    const create = async (myCar) => {
            await dispatch(carActions.createCar(myCar))
            reset()
    }
    const update = async (myCar) => {
        await dispatch(carActions.updateCar({id: carForUpdate.id, car:myCar}))
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate? create : update)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <button disabled={!isValid}>{!carForUpdate? "Create": 'Update'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
}