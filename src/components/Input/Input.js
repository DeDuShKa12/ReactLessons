import React, {useRef} from 'react';

const Input = () => {
    const ref = useRef();

    const save = () => {
    }

    return (
        <div>
            <input type={'text'} ref={ref}/>
            <button onClick={()=>save()}>Save</button>
            <input type={'text'} ref={ref}/>
            <button onClick={()=>save()}>Save</button>
        </div>
    );
};

export {Input};