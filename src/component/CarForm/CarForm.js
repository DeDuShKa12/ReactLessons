import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/Validators";
import {carServices} from "../../services";

const CarForm = ({setCars, car}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    useEffect(() => {
        if (car) {
            setValue('brand', car.brand)
            setValue('year', car.year)
            setValue('price', car.price)
        }
    }, [car])

    const submit = async (mycar) => {
        if (!car) {
            const {data} = await carServices.create(mycar);
            setCars(prev => [...prev, data])
            reset()
        } else if (car) {
            await carServices.updateById(car.id, mycar);

            reset()
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {errors.brand && <span>{errors.brand.message}</span>}
                <input type="text" placeholder={'year'} {...register('year')}/>
                {errors.year && <span>{errors.year.message}</span>}
                <input type="text" placeholder={'price'} {...register('price')}/>
                {errors.price && <span>{errors.price.message}</span>}
                <button disabled={!isValid}>{car ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export {
    CarForm
}