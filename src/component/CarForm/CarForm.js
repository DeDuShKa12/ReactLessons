import React from 'react';
import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm();
    
    const submit = (data) => {
        console.log(data);

    }
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                {}
                <input type="text" placeholder={'year'} {...register('year')}/>
                <input type="text" placeholder={'pryce'} {...register('pryce')}/>
                <button onClick={()=>{}}>Create</button>
            </form>
        </div>
    );
};

export {
    CarForm
}